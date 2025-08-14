import { combineReducers, configureStore } from '@reduxjs/toolkit';
import localizerReducer from './localizer';

export const store = configureStore({
    reducer: {
        localizer: localizerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
