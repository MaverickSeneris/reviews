import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
createNativeStackNavigator
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/about';
import Home from '../screens/home';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const RootDrawerNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ddd',
        },
        headerTintColor: '#333',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitleVisible: false,
      }}
      >
      <Stack.Screen name="Home" component={HomeStack} />
      <Stack.Screen name="About" component={About} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default RootDrawerNavigator;
