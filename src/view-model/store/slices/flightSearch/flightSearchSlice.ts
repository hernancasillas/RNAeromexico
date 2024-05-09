import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {FlightStatus} from '../../../interfaces/FlightStatus';
import {FlightNumber, Place} from '../../../types';

export interface FlightSearchState {
  arrival: Place | null;
  dateOfDeparture: string;
  departure: Place | null;
  flightNumber: FlightNumber;
  flightResults: FlightStatus[];
  isLoading: boolean;
  searchingtype: 'flightNumber' | 'destination';
}

const initialState: FlightSearchState = {
  arrival: {code: 'CUN', name: 'Cancún'},
  dateOfDeparture: '2023-11-21T06:00:00.000Z',
  departure: {code: 'MEX', name: 'Mexico City'},
  flightNumber: {number: '35', carrier: 'AM'},
  flightResults: [],
  isLoading: false,
  searchingtype: 'flightNumber',
};

export const flightSearchSlice = createSlice({
  name: 'flightSearch',
  initialState,
  reducers: {
    setFlightResults: (state, action: PayloadAction<FlightStatus[]>) => {
      state.flightResults = action.payload;
      state.isLoading = false;
    },

    updateFlightNumber: (state, action: PayloadAction<FlightNumber>) => {
      state.flightNumber = action.payload;
    },

    updateDepartureDate: (state, action: PayloadAction<string>) => {
      state.dateOfDeparture = action.payload;
    },

    updateDeparture: (state, action: PayloadAction<Place>) => {
      state.departure = action.payload;
    },

    upDateArrival: (state, action: PayloadAction<Place>) => {
      state.arrival = action.payload;
    },

    startSearchingByFlightNumber: state => {
      state.searchingtype = 'flightNumber';
      state.isLoading = true;
    },

    startSearchingByDestination: state => {
      state.searchingtype = 'destination';
      state.isLoading = true;
    },
  },
});

export const {
  setFlightResults,
  updateFlightNumber,
  updateDepartureDate,
  updateDeparture,
  upDateArrival,
  startSearchingByFlightNumber,
  startSearchingByDestination,
} = flightSearchSlice.actions;
