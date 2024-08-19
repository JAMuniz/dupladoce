import React from 'react';
import {StyleSheet, Pressable, Alert, Text} from 'react-native';


import LoginScreen from '../Screens/LoginScreen';


const LoginButton = () => {
  
  return (
    <Pressable style={styles.button} >
      <Text style={styles.buttonText}>Login</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    marginHorizontal: 150,
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

export default LoginButton;
