import React from 'react';
import { Text } from '@rneui/base';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Greeting } from './Greeting';
import { Overview } from './Overview';
import { BottomSheet } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { RootNativeStackParamsList } from './types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from './screenNames';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootNativeStackParamsList>;

export const HomeScreen = () => {
    const navigator = useNavigation<HomeScreenNavigationProp>();
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <Greeting />
            <View
                style={{
                    padding: 10,
                    flex: 1,
                }}
            >
                <Calendar
                    style={{
                        borderRadius: 8,
                    }}
                    theme={{
                        backgroundColor: '#eee',
                        calendarBackground: '#fff',
                    }}
                    // Initially visible month. Default = now
                    current={new Date().toISOString()}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => {}}
                    // Handler which gets executed on day long press. Default = undefined
                    onDayLongPress={(day) => {
                        console.log('selected day', day);
                    }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'MMMM yyyy'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => {
                        console.log('month changed', month);
                    }}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                    firstDay={0}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={(subtractMonth) => subtractMonth()}
                    // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                    onPressArrowRight={(addMonth) => addMonth()}
                    // Enable the option to swipe between months. Default = false
                    enableSwipeMonths={true}
                />
                <Overview />
                <BottomSheet
                    containerStyle={{}}
                    modalProps={{}}
                    backdropStyle={{}}
                    onBackdropPress={() => {}}
                    isVisible={true}
                    scrollViewProps={{}}
                />
            </View>
        </View>
    );
};
