import {Animated, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/RootNavigator';

import {useAnimationButton} from '../../hooks/useAnimationButton';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '../Icon';

export const BackButton = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {bottom} = useSafeAreaInsets();
  const {onPressIn, onPressOut, scale} = useAnimationButton();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={handlePress}>
      <Button pb={bottom} style={{transform: [{scale}]}}>
        <Icon name="chevron_left" size={30} />
      </Button>
    </TouchableWithoutFeedback>
  );
};

const Button = styled(Animated.View)<{pb: number}>`
  background-color: #ffffff;
  border-radius: 50px;
  border: 1px solid #cccccc;
  justify-content: center;
  align-items: center;
  padding: 4.88px;
  position: absolute;
  left: 25px;
  top: ${({pb}) => pb + 17}px;
`;
