import React from 'react';
import styled from 'styled-components/native';
import {Icon} from '../Icon';

export const Airplane = () => {
  return (
    <Container>
      <Line>
        <IconContainer>
          <Icon name="airplane" size={30} color="#000000" />
        </IconContainer>
      </Line>
    </Container>
  );
};

const Container = styled.View`
  position: absolute;
  width: 100%;
`;

const Line = styled.View`
  height: 2px;
  width: 100%;
  background-color: #000000;
  border-radius: 1px;
`;

const IconContainer = styled.View`
  position: absolute;
  justify-content: center;
  align-items: flex-end;
  right: 28px;
  top: -16px;
`;
