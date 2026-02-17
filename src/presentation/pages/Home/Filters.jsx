import { useState } from 'react'
import styles from './Filters.module.css'


export default function Filters() {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className={ styles.container }>
            <div className={ styles.searchBar}>
                <input
                    type='text'
                    value={ searchTerm }
                    onChange={ (e) => setSearchTerm(e.target.value ) }
                    placeholder='Search'
                    className={ styles.searchInput }
                />
            </div>
            <div className={ styles.dropFilter }>
                <div className={ styles.dropStatus }>
                    drop status filter
                </div>
                <div className={ styles.dropMetal }>
                    drop metal filter
                </div>
            </div>
        </div>
    )
}