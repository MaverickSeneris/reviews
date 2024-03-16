import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './homeStack';
import Header from '../shared/header';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

const RootDrawerNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator
      screenOptions={{
        header: (props) => <Header {...props} title=" GameZone" />,
        headerBackTitleVisible: false,
      }}
      >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default RootDrawerNavigator;
