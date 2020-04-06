import * as React from 'react';
import Login from '../screens/Login.js';
import Signup from '../screens/Signup.js';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Auth = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                headerShown: false
            }
        },
        Signup: {
            screen: Signup
        }
    }
)

export default createAppContainer(Auth);