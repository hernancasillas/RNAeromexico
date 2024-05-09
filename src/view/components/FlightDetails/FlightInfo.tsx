import {View} from 'react-native';
import styled from 'styled-components/native';

import {FlightStatusTag} from './FlightStatusTag';
import {useFlightStatus} from '../../../view-model/hooks/useFlightStatus';
import {FlightStatus} from '../../../view-model/interfaces/FlightStatus';
import {DateService} from '../../../view-model/classes/DateService';

export const FlightInfo = () => {
  const {flightStatus} = useFlightStatus();

  const {segment} = flightStatus as FlightStatus;
  const {
    marketingCarrier,
    marketingFlightCode,
    departureDateTime,
    flightStatus: status,
  } = segment;

  const displayDate = new DateService(new Date(departureDateTime)).display();

  return (
    <Container>
      <View>
        <FlightNumber>
          <AirlineText>{`${marketingCarrier} `}</AirlineText>
          {marketingFlightCode}
        </FlightNumber>
        <FlightDate>{displayDate}</FlightDate>
      </View>

      <FlightStatusTag status={status} />
    </Container>
  );
};

const Container = styled.View`
  padding: 20px 25px 20px 25px;
  border-bottom-width: 1px;
  border-color: #cccccc;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FlightNumber = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
`;
const AirlineText = styled.Text`
  color: rgba(0, 0, 0, 0.3);
`;

const FlightDate = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;
