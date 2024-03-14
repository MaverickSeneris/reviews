import React from 'react';
import {View, Text, Button} from 'react-native';
import {globalStyles} from '../styles/global';

export default function ReviewDetails({navigation, route}) {
  const review = route.params;

  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{review.title}</Text>
      <Text style={globalStyles.paragraph}>{review.body}</Text>
      <Text style={globalStyles.paragraph}>Rating: {review.rating}</Text>
      <Button title="Back to home" onPress={pressHandler} />
    </View>
  );
}
