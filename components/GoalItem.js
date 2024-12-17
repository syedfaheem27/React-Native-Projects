import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ text, id, onDeleteGoal }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteGoal.bind(null, id)}
        // for android ripple effect
        android_ripple={{ color: "#3b82f6" }}
        // for ios ripple effect
        syle={({ pressed }) => pressed && styles.pressedText}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 4,
    backgroundColor: "#dbeafe",
    borderRadius: 6,
  },
  pressedText: {
    opacity: 0.5,
  },
  goalText: {
    padding: 6,
    color: "#172554",
    fontWeight: "500",
  },
});

export default GoalItem;
