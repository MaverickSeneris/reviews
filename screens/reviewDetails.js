import React from 'react';
import {View, Text, Button} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';
import Ratings from '../shared/ratings';

export default function ReviewDetails({navigation, route}) {
  const review = route.params;
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
      <Card style={globalStyles.container}>
        <Text style={globalStyles.titleText}>{review.title}</Text>
        <Text style={globalStyles.paragraph}>{review.body}</Text>
        <Ratings score={review.rating}/>
        <Button title="Back to home" onPress={pressHandler} />
      </Card>

  );
}
