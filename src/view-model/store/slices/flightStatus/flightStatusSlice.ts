import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FlightStatus} from '../../../interfaces/FlightStatus';

type FlightStatusState = {
  flightStatus: FlightStatus | {};
};

const initialState: FlightStatusState = {
  flightStatus: {},
};

export const flightStatusSlice = createSlice({
  name: 'flightStatus',
  initialState,
  reducers: {
    updateFlightStatus: (state, action: PayloadAction<FlightStatus>) => {
      state.flightStatus = action.payload;
    },
  },
});

export const {updateFlightStatus} = flightStatusSlice.actions;
