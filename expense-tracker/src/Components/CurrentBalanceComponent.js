import React from 'react';

const CurrentBalanceComponent = () => {
    return (
        <div className="current-balance-container">
        <h2>Current Balance</h2>
            <div className="circular-progress-container">
                <svg width="170px" height="170px">
                    <circle className="outer" cx="50%" cy="50%" r="40%"></circle>
                    <circle className="inner" cx="50%" cy="50%" r="40%"></circle>
                </svg>
                <div className="current-balance-percentage">75</div>
            </div>
            <div className="current-balance">00.00</div>
        </div>
    )
}

export default CurrentBalanceComponent;