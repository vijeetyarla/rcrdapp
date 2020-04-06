import * as React from 'react';
import Home from '../screens/Home.js';
import Search from '../screens/Search.js';
import Profile from '../screens/Profile.js';
import CreateProject from '../screens/CreateProject.js';
import Activity from '../screens/Activity.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{tabBarLabel: ' ',
            tabBarIcon: ({ color, size, focused }) => (
                <Ionicons name="ios-home" color={focused ? "magenta" : "lightgrey"} size="32" />
            ),
            }}/>
        <Tab.Screen name="Search" component={Search} options={{tabBarLabel: ' ',
            tabBarIcon: ({ color, size, focused }) => (
                <Ionicons name="ios-search" color={focused ? "magenta" : "lightgrey"} size="32" />
            ),
            }}/>
        <Tab.Screen name="Create" component={CreateProject} 
        options={{tabBarLabel: ' ',
        tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "ios-add-circle-outline" : "ios-add-circle"} color={focused ? "magenta" : "lightgrey"} size="32" />
        ),
        }}/>
        <Tab.Screen name="Activity" component={Activity} options={{tabBarLabel: ' ',
            tabBarIcon: ({ color, size, focused }) => (
                <Ionicons name={focused ? "ios-heart" : "ios-heart-empty"} color={focused ? "magenta" : "lightgrey"} size="32" />
            ),
            }}/>
        <Tab.Screen name="Profile" component={Profile} options={{tabBarLabel: ' ',
            tabBarIcon: ({ color, size, focused }) => (
                <Ionicons name="ios-person" color={focused ? "magenta" : "lightgrey"} size="32" />
            ),
            }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}