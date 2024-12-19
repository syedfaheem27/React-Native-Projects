import { Text, View, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberInput from "../components/game/NumberInput";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";

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
      <View style={styles.actionTextContainer}>
        <Text style={styles.actionText}>Higher or Lower?</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>+</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>-</PrimaryButton>
        </View>
      </View>

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
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  actionText: {
    textAlign: "center",
    color: Colors.accent950,
    fontSize: 24,
    fontWeight: "bold",
  },
  actionTextContainer: {
    marginVertical: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
