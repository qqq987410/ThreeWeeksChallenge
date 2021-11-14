import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from './ducks/reducers';

const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
