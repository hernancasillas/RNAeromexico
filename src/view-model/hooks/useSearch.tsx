import {
  updateFlightNumber,
  updateDepartureDate,
  searchByFlightNumber,
  searchByDestination,
} from '../store/slices/flightSearch';
import {FlightNumber} from '../types';
import {store} from '../store';
import {useSelector} from './useSelector';

export const useSearch = () => {
  const flightSearch = useSelector(
    (state: {flightSearch: any}) => state.flightSearch,
  );

  const setFlightNumber = (flightNumber: FlightNumber) => {
    store.dispatch(updateFlightNumber(flightNumber));
  };

  const setDepartureDate = (date: string) => {
    store.dispatch(updateDepartureDate(date));
  };

  const searchFlightByDestination = () => {
    store.dispatch(searchByDestination());
  };

  const searchFlightByNumber = () => {
    store.dispatch(searchByFlightNumber());
  };

  return {
    flightSearch,
    setFlightNumber,
    setDepartureDate,
    searchFlightByDestination,
    searchFlightByNumber,
  };
};
