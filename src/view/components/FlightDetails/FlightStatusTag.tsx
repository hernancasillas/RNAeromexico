import React from 'react';
import styled from 'styled-components/native';
import {fontBold} from '../../../model/constants/fonts';

const getStatusData = (status: string) => {
  const statusData: {
    [key: string]: {statusText: string; color: string; textColor: string};
  } = {
    IN_THE_AIR: {
      statusText: 'In the air',
      color: '#1872B3',
      textColor: '#FFFFFF',
    },
    ON_TIME: {
      statusText: 'on time',
      color: '#2E9509',
      textColor: '#FFFFFF',
    },
    DELAYED: {
      statusText: 'Delayed',
      color: '#FECB2F',
      textColor: '#000000',
    },
    ARRIVED: {
      statusText: 'Arrived',
      color: '#000000',
      textColor: '#FFFFFF',
    },
  };

  return statusData[status] || statusData.ON_TIME;
};

type Props = {
  status: string;
};

export const FlightStatusTag = ({status}: Props) => {
  const {statusText, color, textColor} = getStatusData(status);

  return (
    <Container color={color}>
      <StatusText color={textColor}>{statusText}</StatusText>
    </Container>
  );
};

const Container = styled.View<{color: string}>`
  background-color: ${({color}) => color};
  padding: 4px 8px 4px 8px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const StatusText = styled.Text<{color: string}>`
  color: ${({color}) => color};
  font-size: 12px;
  font-family: ${fontBold};
`;
