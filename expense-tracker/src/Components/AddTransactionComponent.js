import React from 'react'

const AddTransactionComponent = ({addTransaction, displayAlert, history}) => {
    const validTransactionAddition = () => {
        const type = document.getElementById('radio-income').checked ? 'income' : 'expenses';
        if(type === 'expenses'){
            const amount = document.getElementById('amount').value;
            // Get totals
            let totalIncome = 0;
            let totalExpenses = 0;
            if(history.filter(element => element.type === 'income').length > 0) {
                totalIncome = history.filter(element => element.type === 'income').map(element => element.amount).reduce((acc, amount) => (parseInt(acc) + parseInt(amount)));
            }
            if(history.filter(element => element.type === 'expenses').length > 0){
                totalExpenses = history.filter(element => element.type === 'expenses').map(element => element.amount).reduce((acc, amount) => (parseInt(acc) + parseInt(amount)));         
            }
    
            let balance = totalIncome - totalExpenses;
            
            return balance - parseInt(amount) >= 0;
        } else {
            return true;
        }
    }
    const add = e => {
        e.preventDefault();
        const description = document.getElementById('description').value.trim();
        const amount = document.getElementById('amount').value;
        const type = document.getElementById('radio-income').checked ? 'income' : 'expenses';

        if(description && amount){
            if(validTransactionAddition()) {
                addTransaction(description,amount,type);
            } else {
                displayAlert('You do not have enough balance');
            }
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