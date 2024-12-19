import { Text, View, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberInput from "../components/game/NumberInput";

const generateRandomNumber = (min, max, exclude) => {
  const num = Math.floor(Math.random() * (max - min)) + min;

  if (num === exclude) generateRandomNumber(min, max, exclude);
  else return num;
};

const Game = ({ userNumber }) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currGuess, setCurrGuess] = useState(initialGuess);

  return (
    <View style={styles.gameContainer}>
      <Title>Opponent's Guess</Title>
      <NumberInput>{currGuess}</NumberInput>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      {/* +- */}
      {/* View Logs */}
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  gameContainer: {
    padding: 24,
    marginVertical: 24,
  },
});
