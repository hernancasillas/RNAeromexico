import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {HeaderTitle} from './HeaderTitle';
import {DateInfo} from './DateInfo';
import {IconButton} from '../../IconButton';

export const Header = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <IconButton name="chevron_left" size={31} onPress={handleBack} />
      <InfoContainer>
        <HeaderTitle />
        <DateInfo />
      </InfoContainer>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
`;

const InfoContainer = styled.View`
  flex: 1;
  align-items: flex-end;
`;
