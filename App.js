import React, {useState} from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import DDHeader from './components/DDHeader';
import DDFooter from './components/DDFooter';
import LoginScreen from './Screens/LoginScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import MenuScreen from './Screens/MenuScreen';
import InfoScreen from './Screens/InfoScreen';


//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>     
      <View style={styles.container}>   
        <Tab.Navigator style={styles.tab}
          screenOptions={({ route }) => ({
            tabBarStyle: { backgroundColor: 'pink' },
            tabBarIcon: ({size}) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = 'home';
                } else if (route.name === 'Menu') {
                  iconName = 'menu';
                } else if (route.name === 'Info') {
                  iconName = 'information-circle-outline';
                }
                return <Ionicons name={iconName} size={size} />;
              },
            })}
            initialRouteName="Home">
          <Tab.Screen name="Home" component={WelcomeScreen} options={{headerShown: false}}/>
          <Tab.Screen name="Menu" component={MenuScreen}  options={{headerShown: false}}/>    
          <Tab.Screen name="Info" component={InfoScreen} options={{headerShown: false}}/>
        </Tab.Navigator>
      </View>
      <View style={styles.footerContainer}>
        <DDFooter />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  footerContainer: { backgroundColor: '#333333' },
});
