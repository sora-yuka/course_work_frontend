import { Fragment } from 'react'
import Header from '@components/Header'
import Stats from './Stats'
import Filters from './Filters'
import styles from './Home.module.css'


export default function Home() {
    return (
        <Fragment>
            <Header />
            <div className={ styles.container }>
                <div className={ styles.content }>
                    <Stats/>
                    <Filters/>
                </div>
            </div>
        </Fragment>
    )
}
