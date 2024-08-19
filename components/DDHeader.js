import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DDHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Dupla Doce</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    marginBottom: -35,
  },
  headerText: {
    padding: 45,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});