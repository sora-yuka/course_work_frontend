import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={ styles.header}>
            <h3 className={ styles.title }>Jewelry Inventory Dashboard</h3>
            <div className={ styles.actionControl }>
                <button className={ styles.addNewItemButton}>
                    Add New Item
                </button>
                <button className={ styles.logoutButton }>
                    Logout
                </button>
            </div>
        </div>
    )
}