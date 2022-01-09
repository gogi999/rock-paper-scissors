import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import gameReducer from './gameSlice';
import navigationReducer from './navigationSlice';

const reducers = combineReducers({
  game: gameReducer,
  navigation: navigationReducer
});

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['navigation'],
  blacklist: ['game']
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export default store;
