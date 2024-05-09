import React from 'react';
import styled from 'styled-components/native';
import {Switch} from '../../../Switch';
import {fontBold} from '@constants/fonts';

export const FavoriteSwitch = ({
  isFavorite,
  onToggle,
}: {
  isFavorite: boolean;
  onToggle: () => void;
}) => {
  return (
    <Container>
      <Text>Favorite</Text>
      <Switch value={isFavorite} onValueChange={onToggle} />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 4px 15px 4px 0px;
`;

const Text = styled.Text`
  font-size: 15px;
  color: #000000;
  font-family: ${fontBold};
  margin-right: 8px;
`;
