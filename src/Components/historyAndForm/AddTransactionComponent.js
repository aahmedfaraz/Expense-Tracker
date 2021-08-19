import React, {useContext, useState} from 'react'
import globalContext from './../../Context/Global/globalContext';
import alertContext from './../../Context/Alert/alertContext';

const AddTransactionComponent = () => {
    const {history, addTransaction} = useContext(globalContext);
    const {displayAlert} = useContext(alertContext);

    const initialState = {
        description: "",
        amount: "",
        type: 'expenses'
    }

    const [state, setState] = useState(initialState);
    const {description, amount, type} = state;

    // To update local state at every change in input
    const onChange = e => setState({...state,[e.target.name]:e.target.value});

    // Check if transaction is valid to add a new element otherwise show alert message
    const validateAddTransaction = () => {
        const type = document.getElementById('radio-income').checked ? 'income' : 'expenses';
        if(type === 'expenses'){
            const amount = document.getElementById('amount').value;
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

    // Submit form
    const submit = e => {
        e.preventDefault();
        if(description.trim() !== "" && amount !== ""){
            if(validateAddTransaction()) {
                addTransaction(description, amount, type);
                // Reset inputs
                setState({
                    description: "",
                    amount: "",
                    type: 'expenses'
                });
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
                <input type="text" id="description" name="description" value={description} onChange={onChange} placeholder="Description Here"></input>
            </div>
            <div className="form-controls">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" name="amount" value={amount} onChange={onChange} placeholder="Transaction Amount Here"></input>
            </div>
            <div className="form-controls">
                <label>Type</label>
                <div>
                    <input type="radio" name="type" value="income" checked={type==='income'} onChange={onChange} id="radio-income"/><label htmlFor="radio-income">Income</label>
                    <input type="radio" name="type" value="expenses" checked={type==='expenses'} onChange={onChange} id="radio-expenses"/><label htmlFor="radio-expenses">Expenses</label>
                </div>
            </div>
            <button className="btn" id="add" onClick={submit}>Add <i className="fas fa-plus"></i></button>
        </form>
    )
}

export default AddTransactionComponent;