import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Rating} from '@kolking/react-native-rating';
import {globalStyles} from '../styles/global';

const Ratings = ({score}) => {
  const [rating, setRating] = useState(score);

  return (
    <View>
      <Rating variant="hearts" size={20} rating={rating} disabled={true} />
      <Text style={globalStyles.paragraph}>Rated {rating} out of 5</Text>
    </View>
  );
};

export default Ratings;
