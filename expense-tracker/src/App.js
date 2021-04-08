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
  // Get totals except
  const validDelete = index => {
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

  // Add transaction
  const addTransaction = (description, amount, type) => {
    setHistory([...history,{
      description,
      amount,
      type
    }])
  }

  // display alert
  const displayAlert = (msg) => {
    setAlert(msg);
  }

  // clear alert
  const clearAlert = () => {
    setAlert(null);
  }

  // clear transaction
  const clearData = index => {
    if(validDelete(index)) {
      setHistory(history.filter((ele,ind) => ind !== index));
    } else {
      displayAlert('To delete this income you have to delete some of your expenses');
    }
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
              clearData={clearData}/>}/>
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
