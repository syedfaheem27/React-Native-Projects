import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(text) {
    setCourseGoals((goal) => [
      ...goal,
      {
        id: Math.random().toString(),
        text,
      },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={goalInputHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
    borderWidth: 1,
    borderColor: "red",
    padding: 4,
  },
});
