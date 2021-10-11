import { registerRootComponent } from 'expo';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../src/components/Home';
import LandingScreen from '../src/components/LandingScreen';
import EditEvent from '../src/components/EditEvent';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer >
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="LandingScreen" component={LandingScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name="EditEvent" component={EditEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);