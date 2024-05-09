import {View} from 'react-native';
import styled from 'styled-components/native';

import {Icon} from '../Icon';
import {useFlightStatus} from '../../../view-model/hooks/useFlightStatus';
import {FlightStatus} from '../../../view-model/interfaces/FlightStatus';
import {DateService} from '../../../view-model/classes/DateService';

type TableProps = {
  type: 'Departure' | 'Arrival';
  place: string;
  data: DataTable[];
};

type DataTable = {
  title: string;
  info: string;
};

export const DetailsTable = () => {
  const {flightStatus} = useFlightStatus();

  const {
    segment,
    boardingTerminal,
    boardingGate,
    estimatedArrivalTime,
    arrivalTerminal,
  } = flightStatus as FlightStatus;
  const {departureDateTime} = segment;

  const departureTime = new DateService(
    new Date(departureDateTime),
  ).displayTime();
  const arrivalTime = new DateService(
    new Date(estimatedArrivalTime),
  ).displayTime();

  return (
    <Container>
      <Title>Flight Details</Title>
      <Table
        type="Departure"
        // TODO: Change this place for the real one
        place="Ciudad de México - AICM"
        data={[
          {
            title: 'Terminal',
            info: boardingTerminal,
          },
          {
            title: 'Gate',
            info: boardingGate,
          },
          {
            title: 'Date',
            info: departureTime,
          },
        ]}
      />
      <Table
        type="Arrival"
        // TODO: Change this place for the real one
        place="Cancún - Terminal 4"
        data={[
          {
            title: 'Terminal',
            info: arrivalTerminal,
          },
          {
            title: 'Est. Landing',
            info: arrivalTime,
          },
        ]}
      />
    </Container>
  );
};

const Table = ({type, place, data}: TableProps) => {
  return (
    <View>
      <TableHeader>
        <TitleTableContainer>
          <Icon
            name={type === 'Departure' ? 'departure' : 'arrival'}
            size={16}
          />

          <TitleTable>{type}</TitleTable>
        </TitleTableContainer>

        <Place>{place}</Place>
      </TableHeader>

      <TableDataContainer>
        {data.map((item, index) => (
          <Data
            key={index + item.title + item.info}
            title={item.title}
            info={item.info}
          />
        ))}
      </TableDataContainer>
    </View>
  );
};

const Data = ({title, info}: DataTable) => {
  return (
    <DataContainer>
      <DataTitle>{title}</DataTitle>
      <DataInfo>{info}</DataInfo>
    </DataContainer>
  );
};

const Container = styled.View`
  padding: 20px 25px 20px 25px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-family: Garnett-Bold;
  color: #000000;
`;

const TableHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const TitleTableContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TitleTable = styled.Text`
  font-size: 14px;
  font-family: Garnett-Bold;
  color: #000000;
  margin-left: 7px;
`;

const Place = styled.Text`
  font-size: 12px;
  font-family: Garnett-Regular;
  color: rgba(0, 0, 0, 0.5);
`;

const TableDataContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 10px 15px 10px 15px;
`;

const DataContainer = styled.View`
  justify-content: center;
  margin-right: 36px;
`;

const DataTitle = styled.Text`
  font-size: 12px;
  font-family: Garnett-Regular;
  color: #000000;
`;

const DataInfo = styled.Text`
  font-size: 14px;
  color: #000000;
  font-family: Garnett-Bold;
`;
