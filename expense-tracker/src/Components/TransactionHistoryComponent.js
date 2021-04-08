import React from 'react'

const TransactionHistoryComponent = () => {
    return (
        <div className="transaction-history-container">
            <h2>Transaction History</h2>
            <p>No transactions have taken place yet</p>
            <div className="all-transactions-elements">
                <div className="element">
                    <div className="income box">
                        <div className="description">This is description</div>
                        <div className="amount">00.00</div>
                    </div>
                    <div className="cancel-button">x</div>
                </div>
                <div className="element">
                    <div className="expenses box">
                        <div className="description">This is description</div>
                        <div className="amount">00.00</div>
                    </div>
                    <div className="cancel-button">x</div>
                </div>
            </div>
        </div>
    )
}

export default TransactionHistoryComponent;