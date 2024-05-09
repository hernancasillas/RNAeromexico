import {configureStore} from '@reduxjs/toolkit';
import {flightSearchSlice} from './slices/flightSearch';
import {flightStatusSlice} from './slices/flightStatus';
import {favoritesSlice} from './slices/flightFavorites';

export const store = configureStore({
  reducer: {
    flightSearch: flightSearchSlice.reducer,
    flightStatus: flightStatusSlice.reducer,
    flightsFavorites: favoritesSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
