import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

// Importing all Components
import HeaderComponent from './Components/layout/HeaderComponent'
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import NotFound from './Components/pages/NotFound';
import Alert from "./Components/layout/Alert";

import GlobalState from './Context/Global/GlobalState';
import AlertState from './Context/Alert/AlertState';

function App() {  
  return (
    <GlobalState>
      <AlertState>
        <Router>
          <div className="App">
            < HeaderComponent/>
            <Switch>
              {/* Route for Home Page */}
              <Route exact path='/' component={Home}/>
              {/* Route for About Page */}
              <Route exact path='/about' component={About}/>
              {/* Route for Not Found Page */}
              <NotFound />
            </Switch>
            <Alert/>
          </div>
        </Router>
      </AlertState>
    </GlobalState>
  );
}

export default App;