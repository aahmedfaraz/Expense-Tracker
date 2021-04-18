import React, {useContext} from 'react';
import globalContext from './../../Context/Global/globalContext';

const AmountDetailsComponent = () => {
    const {history} = useContext(globalContext);

    const getTotals = () => {
        // Calculate Total Income and Expenses
        let totalIncome = 0;
        let totalExpenses = 0;
        if(history.filter(element => element.type === 'income').length > 0) {
            totalIncome = history.filter(element => element.type === 'income').map(element => element.amount).reduce((acc, amount) => (parseInt(acc) + parseInt(amount)));
        }
        if(history.filter(element => element.type === 'expenses').length > 0){
            totalExpenses = history.filter(element => element.type === 'expenses').map(element => element.amount).reduce((acc, amount) => (parseInt(acc) + parseInt(amount)));
        }
        return {
            totalIncome,
            totalExpenses
        }
    }

    // Print amount format
    const printAmount = (amount) => {
        return parseFloat(amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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