import './transactions.scss';
import transactions from '../../data/transactions.json';
import TransactionHistoryHead from './TransactionHistoryHead';
import Transaction from './Transaction';

const TransactionHistory = () => (
    <table className="transaction-history">
        <TransactionHistoryHead />

        <tbody>
            {transactions.map(({ id, type, amount, currency }) => (
                <Transaction key={id} type={type} amount={amount} currency={currency} />
            ))}
        </tbody>
    </table>
)

export default TransactionHistory;