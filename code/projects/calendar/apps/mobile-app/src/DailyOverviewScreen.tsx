import React from 'react';
import { Text } from '@rneui/base';
import { View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootNativeStackParamsList } from './types';
import { useNavigation } from '@react-navigation/native';

type DailyOverviewScreenNavigationProp = NativeStackNavigationProp<RootNativeStackParamsList>;

export const DailyOverviewScreen = () => {
    const navigator = useNavigation<DailyOverviewScreenNavigationProp>();
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <View
                style={{
                    alignItems: 'center',
                    padding: 10,
                }}
            >
                <Text
                    style={{
                        fontFamily: 'Quicksand-Regular',
                        fontSize: 22,
                    }}
                ></Text>
            </View>
        </View>
    );
};
