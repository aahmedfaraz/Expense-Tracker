import React, { Fragment } from 'react'
import CurrentBalanceComponent from '../currentDetails/CurrentBalanceComponent'
import AmountDetailsComponent from '../currentDetails/AmountDetailsComponent'
import TransactionHistoryComponent  from "../historyAndForm/TransactionHistoryComponent";
import AddTransactionComponent  from "../historyAndForm/AddTransactionComponent";

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