import { useState } from 'react'
import { getStatsRequest } from '@infrastructure/api/inventory.api'
import styles from './Filters.module.css'

const STATUS_OPTIONS = [
    { value: '', label: 'All Statuses' },
    { value: 'STOCK', label: 'Stock' },
    { value: 'SHOWCASE', label: 'Showcase' },
    { value: 'SOLD', label: 'Sold' },
]

const METAL_OPTIONS = [
    { value: '', label: 'All Metals' },
    { value: 'GOLD', label: 'Gold' },
    { value: 'SILVER', label: 'Silver' },
    { value: 'PLATINUM', label: 'Platinum' },
]


export default function Filters({ onSearch }) {
    const [form, setForm] = useState({
        search: '',
        status: '',
        metal: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(form)
    }

    return (
        <div className={ styles.container }>
            <div className={ styles.searchBar}>
                <form className={ styles.form } onSubmit={ handleSubmit }>
                    <input
                        name='search'
                        value={ form.search }
                        onChange={ handleChange }
                        placeholder='Search UIN or SKU'
                        className={ styles.searchInput }
                    />
                    <button className={ styles.button }>
                        <img src="./src/presentation/assets/send-horizontal.svg" alt="" />
                    </button>
                </form>
            </div>
            <div className={ styles.dropFilter }>
                <div className={ styles.dropStatus }>
                    <select
                        name='status'
                        value={ form.status }
                        onChange={ handleChange }
                        className={ styles.select }
                    >
                        { STATUS_OPTIONS.map((opt) => (
                            <option key={ opt.value } value={ opt.value }>
                                { opt.label }
                            </option>
                        )) }
                    </select>
                </div>
                <div className={ styles.dropMetal }>
                    <select
                        name='metal'
                        value={ form.metal }
                        onChange={ handleChange }
                        className={ styles.select }
                    >
                        { METAL_OPTIONS.map((opt) => (
                            <option key={ opt.value } value={ opt.value }>
                                { opt.label }
                            </option>
                        )) }
                    </select>
                </div>
            </div>
        </div>
    )
}