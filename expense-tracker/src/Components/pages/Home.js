import React, { Fragment } from 'react'
import CurrentBalanceComponent from '../CurrentBalanceComponent'
import AmountDetailsComponent from '../AmountDetailsComponent'
import TransactionHistoryComponent  from "../TransactionHistoryComponent";
import AddTransactionComponent  from "../AddTransactionComponent";

const Home = () => {
    return (
        <Fragment>
            < CurrentBalanceComponent/>
            < AmountDetailsComponent/>
            < TransactionHistoryComponent/>
            < AddTransactionComponent/>
        </Fragment>
    )
}
 export default Home;