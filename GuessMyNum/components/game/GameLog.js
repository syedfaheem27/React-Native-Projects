import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const GameLog = ({ guessNumber, guess }) => {
  return (
    <View style={styles.lisItem}>
      <Text style={styles.item}>#{guessNumber}</Text>
      <Text style={styles.item}>You guessed {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lisItem: {
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: "row",
    backgroundColor: Colors.primary200,
    borderRadius: 200,
    marginHorizontal: "auto",
    marginVertical: 6,
  },
  item: {
    fontFamily: "open-sans",
    color: Colors.accent600,
  },
});

export default GameLog;
