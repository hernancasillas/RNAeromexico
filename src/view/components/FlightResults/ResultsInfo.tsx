import React from 'react';
import styled from 'styled-components/native';
import {fontBold, fontRegular} from '../../../model/constants/fonts';

type Props = {
  details: string;
  totalResults: number;
  isLoading?: boolean;
};

export const ResultsInfo = ({details, totalResults, isLoading}: Props) => {
  return (
    <Container>
      <FlightDetails>{details}</FlightDetails>
      {isLoading ? (
        <Results>Loading...</Results>
      ) : (
        <Results>{`${totalResults} ${
          totalResults === 1 ? 'result' : 'results'
        }`}</Results>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;

const FlightDetails = styled.Text`
  font-size: 14px;
  color: #000000;
  font-family: ${fontBold};
`;

const Results = styled.Text`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  font-family: ${fontRegular};
`;
