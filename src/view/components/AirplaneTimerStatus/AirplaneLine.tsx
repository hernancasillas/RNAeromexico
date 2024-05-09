import React from 'react';
import styled from 'styled-components/native';
import {RouteLine} from './RouteLine';
import {Airplane} from './Airplane';

export const AirplaneLine = () => {
  return (
    <Container>
      <LineContainer>
        <Circle />
        <AirPlaneContainer>
          <RouteLine width={'100%'} />
          <Airplane />
        </AirPlaneContainer>
        <Circle />
      </LineContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 0px 10px 0px 10px;
  align-items: center;
`;

const LineContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Circle = styled.View`
  width: 9px;
  height: 9px;
  background-color: #000000;
  border-radius: 5px;
`;

const AirPlaneContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin: 0px 1px 0px 1px;
`;
