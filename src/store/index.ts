import counter from "./counter.ts";
import order from "./order.ts";
import party from "./party.ts";
import {configureStore, combineReducers, createStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistConfig } from 'redux-persist/es/types';

const rootReducer = combineReducers({
  counter,
  order,
  party
});
const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;