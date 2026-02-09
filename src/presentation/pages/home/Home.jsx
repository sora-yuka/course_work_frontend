import { Outlet } from 'react-router-dom'
import Sidebar from '@presentation/components/sidebar/Sidebar'
import styles from './Home.module.css'


export default function Home() {
  return (
    <div className={ styles.container }>
      <Sidebar />
      <Outlet />
    </div>
  )
}
