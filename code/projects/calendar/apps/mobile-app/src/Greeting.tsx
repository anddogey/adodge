/*
    Greeting at the top:
    - Strings
    1. Hi 👋
    2. Welcome back
    - Animation
    - Color: #30307a
    - Size: Medium
*/
import React from 'react';
import { Text } from '@rneui/base';
import { Animated, View } from 'react-native';

const getRandomGreeting = () => {
    const greetings = ['Hey 👋', 'Howdy 👋', 'Welcome back 👋', 'Hi 👋'];
    return greetings[Math.floor(Math.random() * greetings.length)];
};

export const Greeting = () => {
    return (
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
            >
                {getRandomGreeting()}
            </Text>
        </View>
    );
};
