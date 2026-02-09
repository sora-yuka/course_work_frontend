import { useState, useEffect } from 'react'
import api from '@infrastructure/api/client'
import styles from './Sold.module.css'


export default function Sold() {
  const [sold, setSold] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = api.get('api/v1/inventory/sold/')

      if (response.status === 200) {
        setSold(response.data)
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
        { sold && (
          sold.map((data) => (
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
