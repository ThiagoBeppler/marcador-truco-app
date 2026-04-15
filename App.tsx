import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (

    <>
      <Text style={styles.title}>Marcador de Truco</Text>
    
    </>


  );
}

const styles = StyleSheet.create({

  title: {
    flex: 1,
    marginTop: 10,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
