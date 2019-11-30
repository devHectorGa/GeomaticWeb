import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Header from './components/header/header.component'
import Home from './pages/home/home.component'
import LevantamientoCinta from './pages/levantamiento-cinta/levantamiento-cinta.component';

class App extends Component {
  constructor(){
    super()

    this.state = {
      distancias:[]
    }
  }
  render() {
    return(
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/levantamiento-con-cinta'>
              <LevantamientoCinta />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
