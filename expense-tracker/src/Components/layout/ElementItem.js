import React from 'react'

const ElementItem = ({description, amount, type}) => {
    return (
        <div className="element">
            <div className={`${type} box`}>
                <div className="description">{description}</div>
                <div className="amount">{amount}</div>
            </div>
            <div className="cancel-button">x</div>
        </div>
    )
}

export default ElementItem;
