import { NavLink, useLocation } from 'react-router-dom'
import styles from './Sidebar.module.css'


export default function Sidebar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path
  
  return (
    <aside className={ styles.container }>
      <ul className={ styles.sidebarMenu }>
        <li className={ `${styles.sidebarMenuItem} ${isActive('/') ? styles.sidebarMenuItemActive : ''}` }>
          <NavLink to='/' className={ styles.menuItem }>
            Главная
          </NavLink>
        </li>
        <li className={ `${styles.sidebarMenuItem} ${isActive('/showcase') ? styles.sidebarMenuItemActive : ''}` }>
          <NavLink to='/showcase' className={ styles.menuItem }>
            Витрина
          </NavLink>
        </li>
        <li className={ `${styles.sidebarMenuItem} ${isActive('/stock') ? styles.sidebarMenuItemActive : ''}` }>
          <NavLink to='/stock' className={ styles.menuItem }>
            Склад
          </NavLink>
        </li>
        <li className={ `${styles.sidebarMenuItem} ${isActive('/sold') ? styles.sidebarMenuItemActive : ''}` }>
          <NavLink to='/sold' className={ styles.menuItem }>
            Продано
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}
