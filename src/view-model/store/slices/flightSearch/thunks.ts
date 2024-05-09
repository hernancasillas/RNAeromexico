import {flightService} from '@api/flightService';
import {AppDispatch, RootState} from '../../store';
import {
  setFlightResults,
  startSearchingByDestination,
  startSearchingByFlightNumber,
} from './flightSearchSlice';

export const searchByFlightNumber = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(startSearchingByFlightNumber());
    const state = getState();
    const {flightNumber, dateOfDeparture} = state.flightSearch;
    const flightResults = await flightService.getFlightByNumber({
      date: new Date(dateOfDeparture),
      flightNumber: flightNumber.number,
    });
    dispatch(setFlightResults(flightResults));
  };
};

export const searchByDestination = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(startSearchingByDestination());
    const state = getState();
    const {arrival, departure, dateOfDeparture} = state.flightSearch;
    const flightResults = await flightService.getFlightByDestination({
      date: new Date(dateOfDeparture),
      destination: arrival?.name,
      origin: departure?.name,
    });
    dispatch(setFlightResults(flightResults));
  };
};
