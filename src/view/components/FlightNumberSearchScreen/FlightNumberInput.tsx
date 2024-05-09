import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {useSearch} from '../../../view-model/hooks/useSearch';

export const FlightNumberInput = () => {
  const {flightSearch} = useSearch();
  const {carrier, number} = flightSearch.flightNumber;

  return (
    <Container>
      <Title>Flight Number</Title>
      <InputContainer>
        <Prefix>{carrier}</Prefix>
        <Input value={number} />
      </InputContainer>
    </Container>
  );
};

const Container = styled.View`
  width: 35%;
  height: 64px;
  border-radius: 12px;
  border: 2px solid #000;
  padding: 10px;
  justify-content: center;
  margin-right: 15px;
`;

const Title = styled.Text`
  font-size: 10px;
  color: #000000;
  font-family: Garnett-Regular;
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${Platform.OS === 'android' ? -4 : 0}px;
  margin-bottom: ${Platform.OS === 'android' ? -4 : 0}px;
`;

const Prefix = styled.Text`
  font-size: 16px;
  font-family: Garnett-Bold;
  color: rgba(0, 0, 0, 0.3);
`;

const Input = styled.TextInput`
  font-size: 16px;
  font-family: Garnett-Bold;
  color: #000000;
  padding: 0px 0px 0px 5px;
  align-items: center;
`;
