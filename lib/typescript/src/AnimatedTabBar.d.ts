/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TabsConfigsType, AnimationConfigProps } from './types';
interface AnimatedTabBarProps extends BottomTabBarProps, AnimationConfigProps {
    /**
     * Tabs configurations.
     */
    tabs: TabsConfigsType;
    barStyle: StyleProp<ViewStyle>;
}
export declare const AnimatedTabBar: (props: AnimatedTabBarProps) => JSX.Element;
export {};
