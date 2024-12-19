import { Text, View, StyleSheet } from "react-native";

const Game = () => {
  return (
    <View style={styles.gameContainer}>
      <Text>Opponent's Guess</Text>
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
