import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeStack from './homeStack';
import About from '../screens/about';

const Drawer = createDrawerNavigator();

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
      <Drawer.Screen name="GameZone" component={HomeStack} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default RootDrawerNavigator;
