import React from 'react'

const AmountDetailsComponent = ({history}) => {
    // Print amount format
    const printAmount = (amount) => {
        return parseFloat(amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    // Get totals
    const getTotals = () => {
        let totalIncome = 0;
        let totalExpenses = 0;
        if(history.filter(element => element.type === 'income').length > 0) {
            totalIncome = history.filter(element => element.type === 'income').map(element => element.amount).reduce((acc, amount) => acc + parseInt(amount));
        }
        if(history.filter(element => element.type === 'expenses').length > 0){
            totalExpenses = history.filter(element => element.type === 'expenses').map(element => element.amount).reduce((acc, amount) => acc + parseInt(amount));         
        }
        return {
            totalIncome: totalIncome,
            totalExpenses: totalExpenses
        }
    }
    const {totalIncome, totalExpenses} = getTotals();
    // render
    return (
        <div className="amount-details-container">
            <p className="totals">Total Income <span id="total-income">{printAmount(totalIncome)}</span></p>
            <p className="totals">Total Expenses <span id="total-expenses">{printAmount(totalExpenses)}</span></p>
        </div>
    )
}

export default AmountDetailsComponent;