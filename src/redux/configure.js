import { applyMiddleware, createStore, combineReducers } from 'redux';

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
  applyMiddleware(logger),
);

export default store;
