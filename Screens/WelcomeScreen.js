import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Image, View, Pressable } from 'react-native';


export default function WelcomeScreen() {
  const [message, onChangeMessage ] = useState('');
  return (
    <ScrollView indicatorStyle="black" style={styles.container}>
      <Image
          style={styles.logo}
          source={require('../img/DDLogo.jpeg')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
      <Text style={styles.headerText}>Dupla Doce</Text>
      <Text style={styles.regularText}>
        Sua dupla local de doceiras!
      </Text>
      <Image
        style={styles.image}
        source={require('../img/brownie.jpg')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Brownie'}
      />
      <Image
        style={styles.image}
        source={require('../img/brigadeiro.jpg')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Brigadeiro'}
      />
      <Image
        style={styles.image}
        source={require('../img/docinhodedocedeleite.jpg')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Docinho Doce de Leite'}
      />
      <Image
        style={styles.image}
        source={require('../img/bolo.jpg')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Bolo'}
      />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  headerText: {
    padding: 30,
    fontSize: 35,
    color: '#EDEFEE',
    textAlign: 'center',
    marginBottom: -30,
    marginTop: -15,
  },
  regularText: {
    fontSize: 24,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    alignSelf: 'center',
  },
  logo: {
    marginTop: 60,
    width: 50,
    height: 50,
    borderRadius: 20,
    alignSelf: 'center',
  },
});