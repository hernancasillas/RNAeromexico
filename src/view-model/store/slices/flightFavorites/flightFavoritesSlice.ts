import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FavoritesState {
  favorites: string[];
}

const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload);
      // TODO: Add to AsyncStorage
      //AsyncStorage.setItem('favorites', JSON.stringify(state.favorites)); // Guardar en AsyncStorage
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        segmentCode => segmentCode !== action.payload,
      );
      //AsyncStorage.setItem('favorites', JSON.stringify(state.favorites)); // Guardar en AsyncStorage
    },
    /* loadFavoritesFromStorage: () => {
       AsyncStorage.getItem('favorites')
        .then(favorites => {
          if (favorites) {
            state.favorites = state.favorites.concat(JSON.parse(favorites));
          }
        })
        .catch(error =>
          console.error('Error loading favorites from storage:', error),
        ); 
    }, */
  },
});

export const {addToFavorites, removeFromFavorites} = favoritesSlice.actions;
export const selectFavorites = (state: {favorites: FavoritesState}) =>
  state.favorites;

export default favoritesSlice.reducer;
