import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/view-model/store';
import {RootNavigator} from 'src/view/navigators/RootNavigator';

export default function App() {
  // TODO: Add useEffect to load favorites from storage
  /* useEffect(() => {
    store.dispatch(loadFavoritesFromStorage());
  }, []); */

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
