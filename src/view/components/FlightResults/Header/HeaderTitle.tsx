import styled from 'styled-components/native';
import {Icon} from '../../Icon';
import {useSearch} from '../../../../view-model/hooks/useSearch';

export const HeaderTitle = () => {
  const {flightSearch} = useSearch();

  const {searchingtype} = flightSearch;

  if (searchingtype === 'flightNumber') {
    return <FlightNumberTitle />;
  }

  return <DestinationTitle />;
};

const FlightNumberTitle = () => {
  const {flightSearch} = useSearch();
  const {carrier, number} = flightSearch.flightNumber;

  return (
    <Container>
      <Title>{`${carrier} ${number}`}</Title>
    </Container>
  );
};

const DestinationTitle = () => {
  const {flightSearch} = useSearch();
  const {departure, arrival} = flightSearch;

  const departureCode = departure?.code || '';
  const arrivalCode = arrival?.code || '';

  return (
    <Container>
      <Title>{departureCode}</Title>
      <IconContainer>
        <Icon name="arrow_right" size={20} />
      </IconContainer>
      <Title>{arrivalCode}</Title>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 32px;
  color: #000000;
  font-family: Garnett-Bold;
`;

const IconContainer = styled.View`
  margin: 0 4px 0 4px;
`;
