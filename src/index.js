/* eslint import/no-unresolved: 2 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import Main from './components/tourism/Main';
import Bike from './components/bike/Bike';
import Bus from './components/bus/Bus';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/ThreeWeeksChallenge/tourism">
            <Main />
          </Route>
          <Route path="/ThreeWeeksChallenge/bike">
            <Bike />
          </Route>
          <Route path="/ThreeWeeksChallenge/bus">
            <Bus />
          </Route>
          <Route path="/ThreeWeeksChallenge" exact>
            <App />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
