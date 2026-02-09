import { useEffect, useState } from 'react'
import api from '@infrastructure/api/client'
import styles from './Dashboard.module.css'


export default function Dashboard() {
  const [inventory, setInventory] = useState([])

  const statusTranslations = {
    STOCK: 'На складе',
    SHOWCASE: 'На витрине',
    REPAIR: 'В ремонте',
    SOLD: 'Продано',
    LOST: 'Потеряно',
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('api/v1/inventory/read/')

        if (response.status === 200) {
          setInventory(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className={ styles.container }>
      <h2 className={ styles.header }>Обзор</h2>
      <div className={ styles.content }>
        <div className={ styles.contentItemHeader }>
          <p>Уникальный идентификационный номер</p>
          <p>Буквенно-цифровой код</p>
          <p>Статус</p>
        </div>
        { inventory && (
          inventory.map((data) => (
            <div className={ styles.contentItem } key={data.id}>
              <p>{ data.unique_identification_number }</p>
              <p>{ data.stock_keeping_unit }</p>
              <p>{ statusTranslations[data.status] }</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
