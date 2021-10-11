import React from 'react';
import AddEvent from '../components/AddEvent';
import AllEvents from '../components/AllEvents';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
export default function BottomNavigation() {
    return (
        <Tab.Navigator
            activeColor="#AF8FE9"
            barStyle={{ backgroundColor: '#181A18' }}
            initialRouteName="AddEvent"
        >
            <Tab.Screen
                options={{ headerShown: false }}
                name="AllEvents"
                component={AllEvents}
            />
            <Tab.Screen
                options={{ headerShown: false }}
                name="AddEvent"
                component={AddEvent}
            />
        </Tab.Navigator>
    )
}
