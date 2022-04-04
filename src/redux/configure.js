import { applyMiddleware, createStore } from 'redux';

// Logger with default options
import logger from 'redux-logger';

import rocketsReducer from './rockets/rocketsReducer';

const store = createStore(
  rocketsReducer,
  applyMiddleware(logger),
);

export default store;
