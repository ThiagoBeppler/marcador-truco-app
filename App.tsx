import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Botao } from './components/Botao';
import Contador from './components/Contador';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Marcador de Truco</Text>

      <Contador />
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
  titulo: {
    marginTop: 200,
    fontSize: 40,
    fontWeight: 'bold',
   alignItems: 'center'
  }
});
