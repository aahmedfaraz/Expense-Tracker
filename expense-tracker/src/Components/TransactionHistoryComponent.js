import React from 'react'
import ElementItem from './layout/ElementItem';

const TransactionHistoryComponent = ({history, clearData}) => {
    return (
        <div className="transaction-history-container">
            <h2>Transaction History</h2>
                { history.length === 0 && <p>No transactions have taken place yet</p> }
            <div className="all-transactions-elements">
                { history.length > 0 && history.map((ele,index) => <ElementItem key={index} element={ele}
                                                                        clearData={clearData}
                                                                        index={index}/>) }
            </div>
        </div>
    )
}

export default TransactionHistoryComponent;