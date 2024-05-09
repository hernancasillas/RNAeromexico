import React from 'react';
import styled from 'styled-components/native';
import {Icon} from './Icon';
import {TouchableWithoutFeedback} from 'react-native';
import {DateService} from '../../view-model/classes/DateService';

type Props = {
  date?: Date;
};

export const DateInput = ({date = new Date()}: Props) => {
  const handlePress = () => {
    console.log('Open date picker');
  };

  const dateFormat = new DateService(date).display();

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Container>
        <InfoContainer>
          <Title>Date of departure</Title>
          <Input>{dateFormat}</Input>
        </InfoContainer>
        <Icon size={18.4} name="calendar" />
      </Container>
    </TouchableWithoutFeedback>
  );
};

const Container = styled.View`
  flex: 1;
  border-radius: 12px;
  border: 2px solid #000;
  padding: 10px;
  align-items: center;
  flex-direction: row;
`;

const InfoContainer = styled.View`
  justify-content: center;
  flex: 1;
`;

const Title = styled.Text`
  font-size: 10px;
  color: #000000;
  font-family: Garnett-Regular;
`;

const Input = styled.Text`
  font-size: 16px;
  font-family: Garnett-Bold;
  color: #000000;
  padding: 0px;
`;
