import React, { Fragment } from 'react'
import CurrentBalanceComponent from '../CurrentBalanceComponent'
import AmountDetailsComponent from '../AmountDetailsComponent'
import TransactionHistoryComponent  from "../TransactionHistoryComponent";
import AddTransactionComponent  from "../AddTransactionComponent";

const Home = ({totalIncome, totalExpenses, totalBalance, percentage, history, addTransaction, clearTransaction}) => {
    return (
        <Fragment>
            < CurrentBalanceComponent percentage={percentage} totalBalance={totalBalance}/>
            < AmountDetailsComponent totalIncome={totalIncome} totalExpenses={totalExpenses}/>
            < TransactionHistoryComponent history={history} clearTransaction={clearTransaction}/>
            < AddTransactionComponent addTransaction={addTransaction}/>
        </Fragment>
    )
}
 export default Home;