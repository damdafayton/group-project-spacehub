import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import MissionReducer from './mission/missionReducer';
import rocketsReducer from './rockets/rocketsReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['mission'],
};

const Reducers = combineReducers(
  {
    rockets: rocketsReducer,
    mission: MissionReducer,
  },
);
const rootReducer = persistReducer(persistConfig, Reducers);
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);
const persistor = persistStore(store);
export default { store, persistor };
