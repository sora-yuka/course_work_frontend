
import styles from './InvoiceTable.module.css'


export default function InvoiceTable({ data = [] }) {
    if (!data.length) {
        return <p>No invoices found.</p>
    }

    return (
        <div className={ styles.container }>
            <table className={ styles.table }>
                <thead>
                    <tr>
                        <th>UIN</th>
                        <th>SKU</th>
                        <th>Description</th>
                        <th>weight</th>
                        <th>size</th>
                        <th>status</th>
                        <th>metal</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map((invoice) => (
                        <tr key={ invoice.id }>
                            <td><span className={ styles.uin }>{ invoice.unique_identification_number }</span></td>
                            <td><span className={ styles.sku }>{ invoice.stock_keeping_unit }</span></td>
                            <td><span className={ styles.description }>{ invoice.description }</span></td>
                            <td><span className={ styles.weight }>{ invoice.weight }</span></td>
                            <td><span className={ styles.size }>{ invoice.size }</span></td>
                            <td><span className={ styles.status }>{ invoice.status }</span></td>
                            <td><span className={ styles.metal }>{ invoice.metal }</span></td>
                            <td><span className={ styles.price }>{ invoice.price }</span></td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}