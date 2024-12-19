import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

const Game = () => {
  return (
    <View style={styles.gameContainer}>
      <Title>Opponent's Guess</Title>
      {/* Guess */}
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
