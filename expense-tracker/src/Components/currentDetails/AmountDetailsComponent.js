import React from 'react'

const AmountDetailsComponent = ({totalIncome, totalExpenses}) => {
    // Print amount format
    const printAmount = (amount) => {
        return parseFloat(amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    // render
    return (
        <div className="amount-details-container">
            <p className="totals">Total Income <span id="total-income">{printAmount(totalIncome)}</span></p>
            <p className="totals">Total Expenses <span id="total-expenses">{printAmount(totalExpenses)}</span></p>
        </div>
    )
}

export default AmountDetailsComponent;