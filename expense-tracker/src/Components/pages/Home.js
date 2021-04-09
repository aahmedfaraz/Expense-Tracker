import React, { Fragment } from 'react'
import CurrentBalanceComponent from '../CurrentBalanceComponent'
import AmountDetailsComponent from '../AmountDetailsComponent'
import TransactionHistoryComponent  from "../TransactionHistoryComponent";
import AddTransactionComponent  from "../AddTransactionComponent";

const Home = ({history,addTransaction, clearTransaction, displayAlert}) => {
    return (
        <Fragment>
            < CurrentBalanceComponent history={history}/>
            < AmountDetailsComponent history={history}/>
            < TransactionHistoryComponent history={history}
                clearTransaction={clearTransaction}/>
            < AddTransactionComponent addTransaction={addTransaction}
                displayAlert={displayAlert}
                history={history}/>
        </Fragment>
    )
}
 export default Home;