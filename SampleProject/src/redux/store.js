import { configureStore, combineReducers } from '@reduxjs/toolkit';
import itemReducer from './itemsSlice';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userSlice from './userSlice'

const rootReducer = combineReducers({
    items: itemReducer,
    users : userSlice
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck:false,
    }),
});

export const persistor = persistStore(store)
