import React from 'react'

const AmountDetailsComponent = () => {
    return (
        <div className="amount-details-container">
            <p className="totals">Total Income <span id="total-income">00.00</span></p>
            <p className="totals">Total Expenses <span id="total-expenses">00.00</span></p>
        </div>
    )
}

export default AmountDetailsComponent;