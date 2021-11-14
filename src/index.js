/* eslint import/no-unresolved: 2 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import App from './App';
import Main from './components/tourism/Main';
import Bike from './components/bike/Bike';
import Bus from './components/bus/Bus';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/tourism">
          <Main />
        </Route>
        <Route path="/bike">
          <Bike />
        </Route>
        <Route path="/bus">
          <Bus />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
