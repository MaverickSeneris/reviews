import React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from '../screens/about';

const Stack = createNativeStackNavigator()

const AboutStack = () => (
  <Stack.Navigator
    // screenOptions={{
    //   headerStyle: {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    //   headerBackTitleVisible: false,
    // }}
    >
      <Stack.Screen
        name='About'
        component={About}
      />
    </Stack.Navigator>
);

export default AboutStack;
