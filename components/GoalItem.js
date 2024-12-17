import { StyleSheet, Text, View } from "react-native";

const GoalItem = ({ text }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 4,
    backgroundColor: "#dbeafe",
    padding: 6,
    borderRadius: 6,
  },
  goalText: {
    color: "#172554",
    fontWeight: "500",
  },
});

export default GoalItem;
