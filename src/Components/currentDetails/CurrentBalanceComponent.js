import React, {useContext} from 'react';
import globalContext from './../../Context/Global/globalContext';

const CurrentBalanceComponent = () => {
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

    const getCurrentBalance = () => {
        const {totalIncome, totalExpenses} = getTotals();
        return totalIncome - totalExpenses;
    }

    const getPercentage = () => {
        const {totalIncome, totalExpenses} = getTotals();
        // Calculate percentage
        let percentage = parseInt((( totalIncome - totalExpenses ) * 100 ) / totalIncome);
        percentage = percentage ? percentage : 0;
        // Updated Circular Progress bar in UI
        const root = document.querySelector(':root');
        root.style.setProperty('--current-balance-percentage-value', percentage);
        return percentage;
    }
    
    // Print amount in separated format
    const printAmount = (amount) => {
        return parseFloat(amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    return (
        <div className="current-balance-container">
        <h2>Current Balance</h2>
            <div className="circular-progress-container">
                <svg width="170px" height="170px">
                    <circle className="outer" cx="50%" cy="50%" r="40%"></circle>
                    <circle className="inner" cx="50%" cy="50%" r="40%"></circle>
                </svg>
                <div className="current-balance-percentage">{getPercentage()}</div>
            </div>
            <div className="current-balance">{printAmount(getCurrentBalance())}</div>
        </div>
    )
}

export default CurrentBalanceComponent;