import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Logger with default options
import logger from 'redux-logger';

import rocketsReducer from './rockets/rocketsReducer';
import MissionReducer from './mission/missionReducer';

const rootReducer = combineReducers(
  {
    rockets: rocketsReducer,
    missions: MissionReducer,
  },
);

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
