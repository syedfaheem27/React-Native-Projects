import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useMemo, useState } from "react";
import NumberInput from "../components/game/NumberInput";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";

const generateRandomNumber = (min, max, exclude) => {
  const num = Math.floor(Math.random() * (max - min)) + min;

  if (num === exclude) generateRandomNumber(min, max, exclude);
  else return num;
};

let minBoundary = 1;
let maxBoundary = 100;

const Game = ({ userNumber, onGameOver }) => {
  const initialGuess = useMemo(
    () => generateRandomNumber(minBoundary, maxBoundary, userNumber),
    []
  );
  const [currGuess, setCurrGuess] = useState(initialGuess);

  const nextGuessHandler = (action) => {
    if (
      (action === "lower" && currGuess < userNumber) ||
      (action === "higher" && currGuess > userNumber)
    ) {
      Alert.alert("You're lying!", "Take a valid guess.", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    } else if (action === "lower") maxBoundary = currGuess;
    else if (action === "higher") minBoundary = currGuess;

    const num = generateRandomNumber(minBoundary, maxBoundary, currGuess);
    setCurrGuess(num);
  };

  useEffect(() => {
    if (currGuess === userNumber) onGameOver();
  }, [currGuess]);

  return (
    <View style={styles.gameContainer}>
      <Title>Opponent's Guess</Title>
      <NumberInput>{currGuess}</NumberInput>
      <View style={styles.actionTextContainer}>
        <Text style={styles.actionText}>Higher or Lower?</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(null, "higher")}>
            +
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}>
            -
          </PrimaryButton>
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
