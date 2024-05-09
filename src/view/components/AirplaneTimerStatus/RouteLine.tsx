import React from 'react';
import styled from 'styled-components/native';

type Props = {
  width?: string | number;
};

export const RouteLine = ({width = 100}: Props) => {
  const dottedLine = [...Array(30).keys()].map((_, index) => (
    <Dot key={index} />
  ));

  return <Container lineWidth={width}>{dottedLine}</Container>;
};

const Container = styled.View<{lineWidth: string | number}>`
  width: ${({lineWidth}) =>
    typeof lineWidth === 'number' ? `${lineWidth}px` : lineWidth};
  overflow: hidden;
  flex-direction: row;
  position: absolute;
`;

const Dot = styled.View`
  height: 1px;
  width: 5px;
  background-color: #000000;
  border-radius: 2px;
  margin-right: 3px;
`;
