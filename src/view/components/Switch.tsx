import React from 'react';
import {Animated, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import {useAnimationSwitch} from '../hooks/useAnimationSwitch';

type Props = {
  value?: boolean;
  onValueChange?: (value: boolean) => void;
};

export const Switch = ({
  value: currentValue = false,
  onValueChange = () => {},
}: Props) => {
  const {isActive, translate, toggleSwitch} = useAnimationSwitch(currentValue);

  const handlePress = () => {
    toggleSwitch();
    onValueChange(!isActive);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Container isActive={isActive}>
        <Circle
          style={{
            transform: [{translateX: translate}],
          }}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
};

const Container = styled.View<{isActive: boolean}>`
  width: 33px;
  height: 20px;
  background-color: ${({isActive}) => (isActive ? '#000000' : '#D6D6D6')};
  border-radius: 20px;
  padding: 2px;
`;

const Circle = styled(Animated.View)`
  width: 16px;
  height: 16px;
  background-color: #ffffff;
  border-radius: 20px;
`;
