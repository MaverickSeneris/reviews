import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Rating} from '@kolking/react-native-rating';
import {globalStyles} from '../styles/global';

const Ratings = ({score}) => {
  const rating = score

  return (
    <View style={styles.rating}>
      <Text style={globalStyles.paragraph}>GameZone Rating: </Text>
      <Rating variant="hearts" size={17} rating={rating} disabled={true} />
    </View>
  );
};

const styles= StyleSheet.create({
    rating:{
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        marginTop: 10,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Ratings;
