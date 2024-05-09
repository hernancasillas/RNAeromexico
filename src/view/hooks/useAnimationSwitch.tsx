import {useRef, useState} from 'react';
import {Animated} from 'react-native';

export const useAnimationSwitch = (currentValue: boolean) => {
  const [isActive, setIsActive] = useState<boolean>(currentValue);

  const translate = useRef(new Animated.Value(currentValue ? 14 : 0)).current;

  const toggleSwitch = () => {
    setIsActive(!isActive);
    Animated.timing(translate, {
      toValue: isActive ? 0 : 14,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return {
    isActive,
    toggleSwitch,
    translate,
  };
};
