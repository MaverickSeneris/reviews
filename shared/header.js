import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import logo from '../assets/images/logo.png';
import menu from '../assets/images/menu.png';
import {FONTS} from '../styles/Fonts';

const Header = ({navigation, title}) => {
  
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menu} onPress={openDrawer}>
          <Image style={styles.menuIcon} source={menu} />
        </TouchableOpacity>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingBottom: 20,
    backgroundColor: '#ddd',
  },
  menu: {
    position: 'absolute',
    top: -1,
    left: 10,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: FONTS.BOLD,
    fontSize: 22,
    color: '#333',
  },
  logo: {
    width: 30,
    height: 30,
  },
});

export default Header;
