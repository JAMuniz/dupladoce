import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DDFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        All rights reserved by Dupla Doce, 2023{' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    marginBottom: 15,
  },
  footerText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});
