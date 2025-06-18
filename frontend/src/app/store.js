import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '../features/auth/authSlice';
import bandsReducer from '../features/bands/bandsSlice';
import rehearsalsReducer from '../features/rehearsals/rehearsalsSlice';
import availabilityReducer from '../features/availability/availabilitySlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // only auth will be persisted
};

const rootReducer = combineReducers({
  auth: authReducer,
  bands: bandsReducer,
  rehearsals: rehearsalsReducer,
  availability: availabilityReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);