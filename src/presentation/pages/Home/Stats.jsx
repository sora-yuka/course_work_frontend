import { useEffect, useState } from 'react'
import { getStatsRequest } from '@infrastructure/api/inventory.api'
import styles from './Stats.module.css'


export default function Stats() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getStatsRequest()

                if (response.status === 200) {
                    setData(response.data)
                }
            } catch (error) {
                console.log('Failed to fetch data from stats: ', error)
            }
        }

        fetchData()
    }, [])

    if (!data) return <div>Loading stats...</div>

    return (
        <div className={ styles.container }>
            <div className={ styles.card }>
                <h4 className={ styles.cardHeader }>Total items</h4>
                <p className={ styles.cardValue }>{ data.stats.total }</p>
                {/* <p className={ styles.cardValue }> 1250</p> */}
            </div>
            <div className={ styles.card }>
                <h4 className={ styles.cardHeader }>In stock</h4>
                <p className={ styles.cardValue }>{ data.stats.stock }</p>
                {/* <p className={ styles.cardValue }> 950</p> */}
            </div>
            <div className={ styles.card }>
                <h4 className={ styles.cardHeader }>Showcase</h4>
                <p className={ styles.cardValue }>{ data.stats.showcase }</p>
            </div>
            <div className={ styles.card }>
                <h4 className={ styles.cardHeader }>Sold</h4>
                <p className={ styles.cardValue }>{ data.stats.sold }</p>
            </div>
        </div>
    )
}