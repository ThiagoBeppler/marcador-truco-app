import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Counter } from './components/Counter';

export default function App() {

  return (
    <View style ={styles.container}>
      <Text style={styles.title}>Marcador de Truco</Text>
      <View style={styles.content}>
      <Counter />
     </View>
    </View>


  );
}

const styles = StyleSheet.create({

  title: {
    flex: 1,
    marginTop: 50,
    fontSize: 32,
    fontWeight: 'bold',
    color:  '#dad7cd',
    textAlign: 'center',

  },

  container:{
    flex: 1,
    backgroundColor: "#213e3b"

  
  },

  content:{
    flex: 1,
    justifyContent: "center", // centraliza o resto
    alignItems: "center"
  }

});
