import React from 'react'

const ElementItem = ({index, element: {description, amount, type}, clearTransaction}) => {
    // Print amount in separated format
    const printAmount = (amount) => {
        return parseFloat(amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    // Clear element when click on [x] button
    const clearElement = () => {
        clearTransaction(index);
    }
    return (
        <div className="element">
            <div className={`${type} box`}>
                <div className="description">{description}</div>
                <div className="amount">{printAmount(amount)}</div>
            </div>
            <div className="cancel-button" onClick={clearElement}>x</div>
        </div>
    )
}

export default ElementItem;
