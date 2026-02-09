import { useState, useEffect } from 'react'
import api from '@infrastructure/api/client'
import styles from './Stock.module.css'


export default function Stock() {
  const [stock, setStock] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('api/v1/inventory/stock/')

      if (response.status === 200) {
        setStock(response.data)
      }
    }
    fetchData()
  }, [])

  return (
    <div className={ styles.container }>
      <h2 className={ styles.header }>Продано</h2>
      <div className={ styles.content }>
        <div className={ styles.contentItemHeader }>
          <p>Уникальный идентификационный номер</p>
          <p>Буквенно-цифровой код</p>
        </div>
        { stock && (
          stock.map((data) => (
            <div className={ styles.contentItem } key={data.id}>
              <p>{ data.unique_identification_number }</p>
              <p>{ data.stock_keeping_unit }</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
