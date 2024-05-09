import React from 'react';
import {TouchableWithoutFeedback, Animated} from 'react-native';
import {useAnimationButton} from '../hooks/useAnimationButton';
import styled from 'styled-components/native';

type Props = {
  onPress?: () => void;
  title?: string;
};

export const Button = ({onPress = () => {}, title = 'Button'}: Props) => {
  const {onPressIn, onPressOut, scale} = useAnimationButton();

  return (
    <TouchableWithoutFeedback
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}>
      <AnimatedView style={{transform: [{scale}]}}>
        <Title>{title}</Title>
      </AnimatedView>
    </TouchableWithoutFeedback>
  );
};

const AnimatedView = styled(Animated.View)`
  background-color: #000;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 16px 24px 16px 24px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-family: Garnett-Bold;
`;
