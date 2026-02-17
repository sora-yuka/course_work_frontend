import Header from '@presentation/components/Header'
import styles from './Home.module.css'


export default function Home() {
    return (
        <div className={ styles.container }>
            <div className={ styles.content }>
                <Header />
            </div>
        </div>
    )
}