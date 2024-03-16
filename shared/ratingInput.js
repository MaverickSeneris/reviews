import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Rating } from '@kolking/react-native-rating';

const RatingInput = ({ rating, setRating }) => {
  const handleChange = (value) => {
    setRating(Math.round((rating + value) * 5) / 10);
  };

  return (
    <View style={styles.root}>
      <Rating variant='hearts' size={40} rating={rating} onChange={handleChange} />
      <Text style={styles.text}>Rated {rating} out of 5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 17,
    marginTop: 20,
  },
});

export default RatingInput;
