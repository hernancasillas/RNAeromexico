import {FlightStatus} from '../interfaces/FlightStatus';
import {updateFlightStatus} from '@store/slices/flightStatus';
import {useSelector} from './useSelector';
import {store} from '../store';

export const useFlightStatus = () => {
  const {flightStatus} = useSelector(
    (state: {flightStatus: any}) => state.flightStatus,
  );

  const setFlightStatus = (newFlightStatus: FlightStatus) => {
    store.dispatch(updateFlightStatus(newFlightStatus));
  };

  return {
    flightStatus,
    setFlightStatus,
  };
};
