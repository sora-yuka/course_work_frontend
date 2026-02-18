import { useNavigate } from 'react-router-dom'
import { logoutRequest } from '@infrastructure/api/auth.api'
import styles from './Header.module.css'

export default function Header() {
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logoutRequest()
        navigate('/login')
    }

    const handleAddItem = async () => {

    }

    return (
        <header className={ styles.container }>
            <div className={ styles.header}>
                <h3 className={ styles.title }>Jewelry Inventory Dashboard</h3>
                <div className={ styles.actionControl }>
                    {/* <button className=e */}
                    <button className={ styles.logoutButton } onClick={ handleLogout }>
                        <img src="/src/presentation/assets/power.svg" alt="" />
                    </button>
                </div>
            </div>
        </header>
    )
}