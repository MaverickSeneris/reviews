import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {globalStyles} from '../styles/global.js';
import data from '../data.js';

export default function Home({navigation}) {
  const [reviews, setReviews] = useState(data);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({item})=>(
            <TouchableOpacity onPress={()=> navigation.navigate('Review', item)}>
                <Text style={globalStyles.titleText}>{item.title}</Text>
            </TouchableOpacity>
        )}
      />
    </View>
  );
}


