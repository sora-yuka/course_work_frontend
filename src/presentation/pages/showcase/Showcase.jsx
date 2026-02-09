import { useEffect, useState } from 'react'
import api from '@infrastructure/api/client'
import styles from './Showcase.module.css'


export default function Showcase() {
  const [inShowcase, setInShowcase] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('api/v1/inventory/showcase/')
  
        if (response.status === 200) {
          setInShowcase(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className={ styles.container }>
      <h2 className={ styles.header }>Витрина</h2>
      <div className={ styles.content }>
        <div className={ styles.contentItemHeader }>
          <p>Уникальный идентификационный номер</p>
          <p>Буквенно-цифровой код</p>
        </div>
        { inShowcase && (
          inShowcase.map((data) => (
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
