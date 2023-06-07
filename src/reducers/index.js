import { combineReducers } from 'redux';

import appReducer from './app';
import dataReducer from './data';

// Creating the root reducer and giving him an object with all sub-reducers
const rootReducer = combineReducers({
  app: appReducer,
  data: dataReducer,
});

export default rootReducer;