import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
  StyleSheet,
} from 'react-native';
import {globalStyles} from '../styles/global.js';
import data from '../data.js';
import Card from '../shared/card.js';
import add from '../assets/images/add.png';
import close from '../assets/images/close.png';
import { ScreenStackHeaderRightView } from 'react-native-screens';

export default function Home({navigation}) {
  const [reviews, setReviews] = useState(data);
  const [modal, setModal] = useState(false);

  const modalToggler = () => {
    setModal(!modal);
  };

  return (
    <View style={globalStyles.container}>

      <Modal style={styles.modalContent} visible={modal} animationType='slide'>
        <TouchableOpacity style={styles.modalClose} onPress={modalToggler}>
          <Image style={styles.icon} source={close} />
        </TouchableOpacity>
        <View>
          <Text>Hello from modal</Text>
        </View>
      </Modal>

      <TouchableOpacity style={styles.modalToggle} onPress={modalToggler}>
        <Image style={styles.icon} source={add} />
      </TouchableOpacity>

      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Review', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
  modalToggle:{
    marginBottom:10,
    borderWidh: 1,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  icon:{
    width: 20,
    height: 20
  },
  modalClose:{
    marginTop: 70,
    alignItems: 'center'
  },
  modalContent:{
    flex: 1,
  }
});
