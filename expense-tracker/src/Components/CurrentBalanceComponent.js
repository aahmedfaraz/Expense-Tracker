import React from 'react';

const CurrentBalanceComponent = ({percentage, totalBalance}) => {
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
                <div className="current-balance-percentage">{percentage}</div>
            </div>
            <div className="current-balance">{printAmount(totalBalance)}</div>
        </div>
    )
}

export default CurrentBalanceComponent;