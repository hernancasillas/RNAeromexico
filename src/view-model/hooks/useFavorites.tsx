import {useSelector} from './useSelector';

export const useFavorites = () => {
  const {favorites} = useSelector(
    (state: {flightsFavorites: any}) => state.flightsFavorites,
  );
  return {
    favorites,
  };
};
