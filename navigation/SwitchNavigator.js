import * as React from 'react';
import TabNavigator from './TabNavigator.js';
import { NavigationContainer } from '@react-navigation/native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthNavigator from './AuthNavigator'


const Switch = createSwitchNavigator(
    {
        Home:  {
            screen: TabNavigator
        },
        Auth: {
            screen: AuthNavigator
        },
    },
    {
        initialRouteName: 'Auth',
    }
);

export default createAppContainer(Switch);