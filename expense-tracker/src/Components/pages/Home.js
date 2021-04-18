import React, { Fragment } from 'react'
import CurrentBalanceComponent from '../currentDetails/CurrentBalanceComponent'
import AmountDetailsComponent from '../currentDetails/AmountDetailsComponent'
import TransactionHistoryComponent  from "../historyAndForm/TransactionHistoryComponent";
import AddTransactionComponent  from "../historyAndForm/AddTransactionComponent";

const Home = () => {
    return (
        <Fragment>
            < CurrentBalanceComponent />
            < AmountDetailsComponent />
            < TransactionHistoryComponent />
            < AddTransactionComponent />
        </Fragment>
    )
}
 export default Home;