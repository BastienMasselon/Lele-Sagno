import { createStore, compose, applyMiddleware } from 'redux';

import reducer from 'reducers';
import apiData from 'middlewares/apiData';
import user from 'middlewares/user';

// Activating the redux devtools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creating the store, giving him reducer and middleware(s) as parameters
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(apiData, user)),
);

export default store;
