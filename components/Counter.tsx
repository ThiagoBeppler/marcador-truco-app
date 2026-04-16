import { StyleSheet, Text, View, Alert, Button } from "react-native";
import { GameModel } from "../models/GameModel";
import { useState } from "react";

export function Counter() {
  let gameStorage = new GameModel();

//   let teste = localStorage.getItem("game");

//   if (teste) gameStorage = JSON.parse(teste);

  const [game, setGame] = useState(new GameModel());

  return (
    <>
      <View>
        {game.finished && 
            <View>
                
                <Text style={styles.text}>Jogo Finalizado</Text>
                <Text style={styles.text}>Vencedor: {game.winner}</Text>

            </View> }

        <View style={styles.game}>
          <View>
            <Text style={styles.text}>Jogador/Dupla</Text>
            <Text style={styles.text}>Pontos</Text>
            <Text style={styles.text}>Jogos</Text>
            <Button 
            title="Novo Jogo"
            onPress={() => setGame(NewGame(game))}/>
          </View>

          <View>
            <Text style={styles.text}>{game.player1}</Text>
            <Text style={styles.text}>{game.score1}</Text>
            <Text style={styles.text}>{game.sets1}</Text>

            <Button
                title="Pontuar 1"
              onPress={() => setGame(ScorePoint(game, 1))}
              disabled={game.finished}
            
              
            />
          </View>

          <View>
            <Text style={styles.text}>{game.player2}</Text>
            <Text style={styles.text}>{game.score2}</Text>
            <Text style={styles.text}>{game.sets2}</Text>
            <Button
                title="Pontuar 2"
              onPress={() => setGame(ScorePoint(game, 2))}
              disabled={game.finished}
                       
            />
          </View>
        </View>
      </View>
    </>
  );

  function ScorePoint(game: GameModel, duplaPontuar: number) {
    let newGame = { ...game };

    if (duplaPontuar == 1) newGame.score1++;
    else newGame.score2++;

    if (newGame.score1 >= 12) {
      newGame.score1 = 0;
      newGame.score2 = 0;
      newGame.sets1++;
    }
    if (newGame.score2 >= 12) {
      newGame.score1 = 0;
      newGame.score2 = 0;
      newGame.sets2++;
    }

    if (newGame.sets1 > 1 || newGame.sets2 > 1) {
      newGame.finished = true;
      newGame.winner =
        newGame.sets1 > newGame.sets2 ? newGame.player1 : newGame.player2;
    }

    if(game.finished)
        Alert.alert("TESTE")


    return newGame;
  }

  function NewGame(game: GameModel) {
    let newGame = { ...game };

    newGame.score1 = 0;
    newGame.score2 = 0;
    newGame.sets1 = 0;
    newGame.sets2 = 0;
    newGame.winner = "";
    newGame.finished = false;

    return newGame;
  }
}

const styles = StyleSheet.create({
  counter: {
    flex: 1,
  },
  player: {
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    margin: 10,
    fontSize: 20,
  },
  game: {
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "space-between",
    margin: 20,
    padding: 10,
    gap:10
  },
  text:{
    fontSize: 25,
    textAlign: 'center', 
    color:  '#dad7cd'
  }
});
