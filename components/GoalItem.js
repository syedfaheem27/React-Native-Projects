import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ text, id, onDeleteGoal }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteGoal.bind(null, id)}
        // for android ripple effect
        android_ripple={{ color: "#3b82f6" }}
        // for ios ripple effect
        syle={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 4,
    backgroundColor: "#60a5fa",
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 6,
    color: "#ffff",
    fontWeight: "700",
  },
});

export default GoalItem;
