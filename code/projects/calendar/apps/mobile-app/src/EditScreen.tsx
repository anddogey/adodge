import React from 'react';
import { Text } from '@rneui/base';
import { View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootNativeStackParamsList } from './types';
import { useNavigation } from '@react-navigation/native';

type EditScreenNavigationProp = NativeStackNavigationProp<RootNativeStackParamsList>;

export const EditScreen = () => {
    const navigator = useNavigation<EditScreenNavigationProp>();
    return <View></View>;
};
