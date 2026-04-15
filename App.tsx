import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marcador de Truco</Text>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 200,
    fontSize: 40,
    fontWeight: 'bold',
   alignItems: 'center'
  }
});
