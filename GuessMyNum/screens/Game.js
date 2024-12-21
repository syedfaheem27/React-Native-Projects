import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useMemo, useState } from "react";
import NumberInput from "../components/game/NumberInput";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";
import { Ionicons } from "@expo/vector-icons";
import GameLog from "../components/game/GameLog";

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
  const [guesses, setGuesses] = useState([initialGuess]);

  const numGuesses = guesses.length;

  const nextGuessHandler = (action) => {
    if (
      (action === "lower" && currGuess < userNumber) ||
      (action === "higher" && currGuess > userNumber)
    ) {
      Alert.alert("You're lying!", "Take a valid guess.", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    } else if (action === "lower") maxBoundary = currGuess - 1;
    else if (action === "higher") minBoundary = currGuess + 1;

    const num = generateRandomNumber(minBoundary, maxBoundary, currGuess);
    setCurrGuess(num);
    setGuesses((g) => [num, ...g]);
  };

  useEffect(() => {
    if (currGuess === userNumber) onGameOver(numGuesses);
  }, [currGuess]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  return (
    <View style={styles.gameContainer}>
      <InstructionText style={styles.topInstruction}>
        Guess a Number
      </InstructionText>
      <Title>Opponent's Guess</Title>
      <NumberInput>{currGuess}</NumberInput>
      <Card style={styles.card}>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(null, "higher")}>
              <Ionicons name="add-sharp" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}>
              <Ionicons name="remove-sharp" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guesses}
          renderItem={(objectData) => (
            <GameLog
              guessNumber={numGuesses - objectData.index}
              guess={objectData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  gameContainer: {
    padding: 24,
    marginVertical: 24,
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    padding: 12,
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginVertical: 24,
  },
  topInstruction: {
    borderWidth: 2,
    borderColor: Colors.primary200,
    padding: 12,
    textAlign: "center",
    marginVertical: 12,
  },
  card: {
    marginTop: 24,
  },
  listContainer: {
    flex: 1,
    marginTop: 24,
    padding: 12,
  },
});
