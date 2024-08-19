import React from 'react';
import { View, Text, StyleSheet, Linking, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const InfoScreen = () => {
  const phoneNumber = '+1234567890';
  const facebookLink = 'https://www.facebook.com/example';
  const instagramLink = 'https://www.instagram.com//_d.doce?igsh=a3U3ZxZqdzN5dzd2';

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Image
          style={styles.logo}
          source={require('../img/DDLogo.jpeg')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
      <Text style={styles.header}>About us</Text>
      <Text style={styles.regularText}>Reach out now to order!</Text>
      <View style={styles.content}>
        <Text style={styles.link}>
          <Icon name="whatsapp" size={25} color="#25D366" /> {phoneNumber}
        </Text>
        <Text
          style={styles.link}
          onPress={() => handleLinkPress(facebookLink)}>
          <Icon name="facebook" size={20} color="#3b5998" /> Facebook
        </Text>
        <Text
          style={styles.link}
          onPress={() => handleLinkPress(instagramLink)}>
          <Icon name="instagram" size={20} color="#E1306C" /> Instagram
        </Text>
      </View>
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
    paddingVertical: 60,
    backgroundColor: 'pink',
    color: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  link: {
    fontSize: 23,
    color: 'blue',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  regularText: {
    fontSize: 24,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  logo: {
    marginTop: 60,
    width: 50,
    height: 50,
    borderRadius: 20,
    alignSelf: 'center',
  },
});

export default InfoScreen;
