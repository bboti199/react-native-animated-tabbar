import React from 'react';
import Animated from 'react-native-reanimated';
import { TabConfigsType, AnimationConfigProps } from '../types';
interface AnimatedTabBarItemProps extends AnimationConfigProps, TabConfigsType {
    index: number;
    selectedIndex: Animated.Value<number>;
    label: string;
    allowFontScaling?: boolean;
}
export declare const AnimatedTabBarItem: React.MemoExoticComponent<(props: AnimatedTabBarItemProps) => JSX.Element>;
export {};
