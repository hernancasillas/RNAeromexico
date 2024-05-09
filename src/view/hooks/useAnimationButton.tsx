import {useRef} from 'react';
import {Animated} from 'react-native';

export const useAnimationButton = (
  duration: number = 50,
  animationScale: number = 0.98,
) => {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.timing(scale, {
      toValue: animationScale,
      duration,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  };

  return {
    scale,
    onPressIn,
    onPressOut,
  };
};
