import React, {useState} from 'react';
import {StyleSheet, Pressable, View, Text} from 'react-native';
import MenuItems from './MenuItems';

const MenuButton = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => {setShowMenu(!showMenu);}}>
        <Text style={styles.buttonText}>{showMenu ? 'Home' : 'View Menu'}</Text>
      </Pressable>
      {showMenu && (<MenuItems />)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    marginHorizontal: 125,
    paddingVertical: 10,
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default MenuButton;
