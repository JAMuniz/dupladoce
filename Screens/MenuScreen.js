import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MenuItems from '../components/MenuItems';

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Image
          style={styles.logo}
          source={require('../img/DDLogo.jpeg')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
      <Text style={styles.header}>Menu</Text>
      <MenuItems />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
    paddingBottom: 15,
    backgroundColor: 'pink',
    color: 'white',
  },
  logo: {
    marginTop: 60,
    width: 50,
    height: 50,
    borderRadius: 20,
    alignSelf: 'center',
  },
});

export default MenuScreen;
