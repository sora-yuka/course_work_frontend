import { useState, useEffect, useCallback, Fragment } from 'react'
import { getInventory, getInventoryQuery } from '@infrastructure/api/inventory.api'
import Header from '@components/Header'
import Stats from './Stats'
import Filters from './Filters'
import InvoiceTable from './InvoiceTable'
import styles from './Home.module.css'


export default function Home() {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [hasSearched, setHasSearched] = useState(false)

    const handleSearch = useCallback(async ({ search, status, metal }) => {
        setLoading(true)
        setHasSearched(true)

        const params = new URLSearchParams()
        if (search) params.append('search', search)
        if (status) params.append('status', status)
        if (metal) params.append('metal', metal)

        try {
            const response = await getInventoryQuery(params)
            setResults(response.results ?? response.data)
        } catch (error) {
            console.log('Failed to fetch inventory with query.')
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const response = await getInventory()
            setResults(response.results ?? response.data)
        }

        fetchData()
    }, [])

    return (
        <Fragment>
            <Header />
            <div className={ styles.container }>
                <div className={ styles.content }>
                    <Stats/>
                    <Filters onSearch={ handleSearch }/>

                    { loading && (
                        <p>Loading... Please wait a moment...</p>
                    ) }

                    { !loading && (
                        <InvoiceTable data={ results } />
                    ) }
                </div>
            </div>
        </Fragment>
    )
}
