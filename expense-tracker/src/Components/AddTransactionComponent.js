import React from 'react'

const AddTransactionComponent = ({addTransaction, displayAlert}) => {
    const add = e => {
        e.preventDefault();
        const description = document.getElementById('description').value.trim();
        const amount = document.getElementById('amount').value;
        const type = document.getElementById('radio-income').checked ? 'income' : 'expenses';

        if(description && amount){
            addTransaction(description,amount,type);
        } else {
            displayAlert('Some credentials are missing');
        }
    }
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
                    <input type="radio" name="type" value="income" id="radio-income"/><label htmlFor="radio-income">Income</label>
                    <input type="radio" name="type" value="expenses" id="radio-expenses" defaultChecked/><label htmlFor="radio-expenses">Expenses</label>
                </div>
            </div>
            <button className="btn" id="add" onClick={add}>Add</button>
        </form>
    )
}

export default AddTransactionComponent;