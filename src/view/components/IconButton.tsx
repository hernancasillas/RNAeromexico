import React from 'react';
import { TouchableWithoutFeedback, Animated, ViewStyle } from 'react-native';
import { useAnimationButton } from '../hooks/useAnimationButton';
import { Icon, IconName } from './Icon';
import styled from 'styled-components/native';

type Props = {
    name?: IconName;
    size?: number;
    onPress?: () => void;
    iconStyle?: ViewStyle;
};

export const IconButton = ({ name = 'calendar', size = 30, onPress = () => { }, iconStyle = {} }: Props) => {

    const { onPressIn, onPressOut, scale } = useAnimationButton();

    return (
        <TouchableWithoutFeedback
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={onPress}
        >
            <AnimatedView
                style={{ transform: [{ scale }] }}
                size={size}
            >
                <Icon
                    size={size}
                    name={name}
                    style={iconStyle}
                />
            </AnimatedView>
        </TouchableWithoutFeedback>
    )
}

const AnimatedView = styled(Animated.View) <{ size: number }>`
    height: ${({ size }) => size}px;
    width: ${({ size }) => size}px;
`;