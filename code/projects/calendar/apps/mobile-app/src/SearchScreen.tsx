import React from 'react';
import { Text } from '@rneui/base';
import { View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootNativeStackParamsList } from './types';
import { useNavigation } from '@react-navigation/native';

type SearchScreenNavigationProp = NativeStackNavigationProp<RootNativeStackParamsList>;

export const SearchScreen = () => {
    const navigator = useNavigation<SearchScreenNavigationProp>();
    return <View></View>;
};
