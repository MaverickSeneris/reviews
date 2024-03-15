import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false, }}>
    <Stack.Screen name="HomeScreen" component={Home} />
    <Stack.Screen
      name="Review"
      component={ReviewDetails}
      options={({route}) => ({title: route.params.title})}
    />
  </Stack.Navigator>
);

export default HomeStack;
