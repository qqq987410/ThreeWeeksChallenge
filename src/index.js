/* eslint import/no-unresolved: 2 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import Main from './components/tourism/Main';
import Bike from './components/bike/Bike';
import Bus from './components/bus/Bus';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ul>
        <li>
          <Link to="/">index</Link>
        </li>
        <li>
          <Link to="/tourism">Tourism</Link>
        </li>
        <li>
          <Link to="/bike">Bike</Link>
        </li>
        <li>
          <Link to="/bus">Bus</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/tourism">
          <Main />
        </Route>
        <Route path="/bike">
          <Bike />
        </Route>
        <Route path="/bus">
          <Bus />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
