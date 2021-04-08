import React, { Fragment } from 'react'
import CurrentBalanceComponent from '../CurrentBalanceComponent'
import AmountDetailsComponent from '../AmountDetailsComponent'
import TransactionHistoryComponent  from "../TransactionHistoryComponent";
import AddTransactionComponent  from "../AddTransactionComponent";

const Home = ({history,addTransaction, clearData, displayAlert}) => {
    return (
        <Fragment>
            < CurrentBalanceComponent history={history}/>
            < AmountDetailsComponent history={history}/>
            < TransactionHistoryComponent history={history}
                clearData={clearData}/>
            < AddTransactionComponent addTransaction={addTransaction}
                displayAlert={displayAlert}/>
        </Fragment>
    )
}
 export default Home;