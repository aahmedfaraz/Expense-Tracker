import React from 'react';

const CurrentBalanceComponent = ({history}) => {
    // Print amount format
    const printAmount = (amount) => {
        return parseFloat(amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    // Get totals
    const getTotals = () => {
        let totalIncome = 0;
        let totalExpenses = 0;
        if(history.filter(element => element.type === 'income').length > 0) {
            totalIncome = history.filter(element => element.type === 'income').map(element => element.amount).reduce((acc, amount) => (parseInt(acc) + parseInt(amount)));
        }
        if(history.filter(element => element.type === 'expenses').length > 0){
            totalExpenses = history.filter(element => element.type === 'expenses').map(element => element.amount).reduce((acc, amount) => (parseInt(acc) + parseInt(amount)));         
        }
        return {
            totalIncome: totalIncome,
            totalExpenses: totalExpenses
        }
    }
    // Get Percentage
    const getSetPercentage = () => {
        let percentage = parseInt((( totalIncome - totalExpenses ) * 100 ) / totalIncome);
        percentage = percentage ? percentage : 0;
        let root = document.querySelector(':root');
        root.style.setProperty('--current-balance-percentage-value', percentage);
        return percentage;
    }
    const {totalIncome, totalExpenses} = getTotals();
    return (
        <div className="current-balance-container">
        <h2>Current Balance</h2>
            <div className="circular-progress-container">
                <svg width="170px" height="170px">
                    <circle className="outer" cx="50%" cy="50%" r="40%"></circle>
                    <circle className="inner" cx="50%" cy="50%" r="40%"></circle>
                </svg>
                <div className="current-balance-percentage">{getSetPercentage()}</div>
            </div>
            <div className="current-balance">{printAmount(totalIncome - totalExpenses)}</div>
        </div>
    )
}

export default CurrentBalanceComponent;