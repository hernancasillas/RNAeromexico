import {useRef} from 'react';
import {Animated} from 'react-native';

export const useFadeIn = (duration = 150) => {
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = (callback?: Function) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start(() => (callback ? callback() : null));
  };

  return {
    opacity,
    fadeIn,
  };
};
