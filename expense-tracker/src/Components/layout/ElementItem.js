import React from 'react'

const ElementItem = ({index, element: {description, amount, type}, clearData}) => {
    const printAmount = (amount) => {
        return parseFloat(amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const clear = () => {
        clearData(index);
    }
    return (
        <div className="element">
            <div className={`${type} box`}>
                <div className="description">{description}</div>
                <div className="amount">{printAmount(amount)}</div>
            </div>
            <div className="cancel-button" onClick={clear}>x</div>
        </div>
    )
}

export default ElementItem;
