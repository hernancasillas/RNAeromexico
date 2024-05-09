import styled from 'styled-components/native';

import {AirplaneTimerStatus} from '../AirplaneTimerStatus';
import {useFlightStatus} from '../../../view-model/hooks/useFlightStatus';
import {FlightStatus} from '../../../view-model/interfaces/FlightStatus';

export const TimerStatus = () => {
  const {flightStatus} = useFlightStatus();

  const {segment, totalFlightTimeInMinutes} = flightStatus as FlightStatus;

  const {
    arrivalAirport,
    arrivalDateTime,
    departureAirport,
    departureDateTime,
    flightStatus: status,
  } = segment;

  return (
    <Container>
      <AirplaneTimerStatus
        hideDuration
        arrivalDate={new Date(arrivalDateTime)}
        arrivalPlace={arrivalAirport}
        departureDate={new Date(departureDateTime)}
        departurePlace={departureAirport}
        flightTime={totalFlightTimeInMinutes}
        status={status}
      />
    </Container>
  );
};

const Container = styled.View`
  padding-top: 20px;
  padding-bottom: 25px;
  margin-left: 25px;
  margin-right: 25px;
  border-bottom-width: 1px;
  border-color: #cccccc;
`;
