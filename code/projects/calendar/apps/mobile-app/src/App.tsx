import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootNativeStackParamsList } from './types';
import { SCREEN_NAMES } from './screenNames';
import { SearchScreen } from './SearchScreen';
import { EditScreen } from './EditScreen';
import { DailyOverviewScreen } from './DailyOverviewScreen';

const navigationTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#eee',
    },
};

const Stack = createNativeStackNavigator<RootNativeStackParamsList>();

export const App = () => {
    return (
        <GestureHandlerRootView
            style={{
                flex: 1,
            }}
        >
            <NavigationContainer theme={navigationTheme}>
                <Stack.Navigator>
                    <Stack.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} />
                    <Stack.Screen name={SCREEN_NAMES.DAILY_OVERVIEW} component={DailyOverviewScreen} />
                    <Stack.Screen name={SCREEN_NAMES.EDIT} component={EditScreen} />
                    <Stack.Screen name={SCREEN_NAMES.SEARCH} component={SearchScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};
