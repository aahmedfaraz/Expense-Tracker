import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

// Importing all Components
import HeaderComponent from './Components/HeaderComponent'
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import NotFound from './Components/pages/NotFound';
import Alert from "./Components/Alert";

function App() {
  const [totalIncome, setTotalIncome] = useState(null);
  const [totalExpenses, setTotalExpenses] = useState(null);
  const [totalBalance, setTotalBalance] = useState(null);
  const [percentage, setPercentage] = useState(null);
  const [alert, setAlert] = useState(null);
  const [history, setHistory] = useState([
    {
      description: 'Salary',
      amount: 100000,
      type: 'income'
    },
    {
      description: 'Shopping',
      amount: 30000,
      type: 'expenses'
    }
  ]);
  // Update State totals
  const updateStates = () => {
    // Calculate Total Income and Expenses
    let totalIncome = 0;
    let totalExpenses = 0;
    if(history.filter(element => element.type === 'income').length > 0) {
        totalIncome = history.filter(element => element.type === 'income').map(element => element.amount).reduce((acc, amount) => (parseInt(acc) + parseInt(amount)));
    }
    if(history.filter(element => element.type === 'expenses').length > 0){
        totalExpenses = history.filter(element => element.type === 'expenses').map(element => element.amount).reduce((acc, amount) => (parseInt(acc) + parseInt(amount)));         
    }
    // Calculate percentage
    let percentage = parseInt((( totalIncome - totalExpenses ) * 100 ) / totalIncome);
    percentage = percentage ? percentage : 0;
    // Updated Circular Progress bar in UI
    let root = document.querySelector(':root');
    root.style.setProperty('--current-balance-percentage-value', percentage);

    // Update States
    setTotalIncome(printAmount(totalIncome));
    setTotalExpenses(printAmount(totalExpenses));
    setTotalBalance(printAmount(totalIncome - totalExpenses));
    setPercentage(percentage);
  }
  
  // Print amount format
  const printAmount = (amount) => {
      return parseFloat(amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Check if transaction is valid to clear the given element otherwise show alert message
  const validateClearTransaction = index => {
      let totalIncome = 0;
      let totalExpenses = 0;
      const check = history.filter((ele,ind) => ind !== index);
      if(check.filter(element => element.type === 'income').length > 0) {
          totalIncome = check.filter(element => element.type === 'income').map(element => element.amount).reduce((acc, amount) => acc + amount);
      }
      if(check.filter(element => element.type === 'expenses').length > 0){
          totalExpenses = check.filter(element => element.type === 'expenses').map(element => element.amount).reduce((acc, amount) => acc + amount);         
      }
      return totalIncome - totalExpenses >= 0;
  }

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

  // Add transaction
  const addTransaction = (description, amount, type) => {
    if(description && amount){
        if(validateAddTransaction()) {
          setHistory([...history,{
            description,
            amount: parseInt(amount),
            type
          }])
        } else {
            displayAlert('You do not have enough balance');
        }
    } else {
        displayAlert('Some credentials are missing');
    }
  }

  // clear transaction
  const clearTransaction = index => {
    if(validateClearTransaction(index)) {
      setHistory(history.filter((ele,ind) => ind !== index));
    } else {
      displayAlert('To delete this income you have to delete some of your expenses');
    }
  }

  let timeout;

  // display alert
  const displayAlert = (msg) => {
    timeout && clearTimeout(timeout);
    document.getElementById('alert').classList.add('show');
    setAlert(msg);
  }

  // clear alert
  const clearAlert = () => {
    document.getElementById('alert').classList.remove('show');
    timeout = setTimeout(() => setAlert(null), 700);
  }
  
  return (
    <Router>
      <div className="App">
        < HeaderComponent/>
        <Switch>
          {/* Route for Home Page */}
          <Route exact path='/' render={() => 
            <Home history={history}
              addTransaction={addTransaction}
              displayAlert={displayAlert}
              clearTransaction={clearTransaction}/>}/>
          {/* Route for About Page */}
          <Route exact path='/about' component={About}/>
          {/* Route for Not Found Page */}
          <NotFound />
        </Switch>
        <Alert alert={alert}
          clearAlert={clearAlert}/>
      </div>
    </Router>
  );
}

export default App;
