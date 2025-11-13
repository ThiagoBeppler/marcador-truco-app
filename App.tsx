import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';


export default function App() {
  const [score, setScore] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Marcador de Truco</Text>
      <Text>{score}</Text>
      <Pressable onPress={() => setScore(score + 1)}>
        <Text>Incrementar</Text>
      </Pressable>
      <Pressable onPress={() => setScore(score - 1)}>
        <Text>Decrementar</Text>
      </Pressable>
      <Pressable onPress={() => setScore(0)}>
        <Text>Zerar</Text>
      </Pressable>
      <StatusBar style="auto" />
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
});
