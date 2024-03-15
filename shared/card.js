import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = ({children}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff", // <== Make the shadow props of parent don't inherit to children element
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 4,
    marginVertical: 6,
    ...Platform.select({
      ios: {
        shadowColor: '#333',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  cardContent:{
    marginVertical: 10,
    marginHorizontal: 18,
  }
});

export default Card;
