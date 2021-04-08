import React from 'react'

const AddTransactionComponent = () => {
    return (
        <form>
            <h2>Add Transaction</h2>
            <div className="form-controls">
                <label htmlFor="description">Description</label>
                <input type="text" id="description" placeholder="Description Here"></input>
            </div>
            <div className="form-controls">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" placeholder="Transaction Amount Here"></input>
            </div>
            <div className="form-controls">
                <label>Type</label>
                <div>
                    <input type="radio" name="type" value="income" />Income
                    <input type="radio" name="type" value="expenses" defaultChecked/>Expenses
                </div>
            </div>
            <button className="btn" id="add">Add</button>
        </form>
    )
}

export default AddTransactionComponent;