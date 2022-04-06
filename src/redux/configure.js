import { applyMiddleware, createStore, combineReducers } from 'redux';

// Logger with default options
import logger from 'redux-logger';

<<<<<<< HEAD
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['mission', 'rocket'],
};
=======
import rocketsReducer from './rockets/rocketsReducer';
>>>>>>> parent of 40cc77a... Added mission with redux persist

const rootReducer = combineReducers(
  {
<<<<<<< HEAD
    rocket: rocketsReducer,
    mission: MissionReducer,
=======
    rockets: rocketsReducer,
>>>>>>> parent of 40cc77a... Added mission with redux persist
  },
);

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

export default store;
