import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Logger with default options
import logger from 'redux-logger';

import rocketsReducer from './rockets/rocketsReducer';

const rootReducer = combineReducers(
  {
    rockets: rocketsReducer,
  },
);

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
