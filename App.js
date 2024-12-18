import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function addGoalHandler(text) {
    setCourseGoals((goals) => [
      ...goals,
      {
        id: Math.random().toString(),
        text,
      },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((goals) => goals.filter((item) => item.id !== id));
  }

  function closeModal() {
    setIsModalVisible(false);
  }

  function openModal() {
    setIsModalVisible(true);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.button}>
        <Button title="Add New Goal" onPress={openModal} />
      </View>
      {isModalVisible && (
        <GoalInput
          visible={isModalVisible}
          onAddGoal={addGoalHandler}
          onCloseModal={closeModal}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.id}
              text={itemData.item.text}
              onDeleteGoal={deleteGoalHandler}
            />
          )}
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
    backgroundColor: "#dbeafe",
    opacity: 0.6,
    padding: 4,
  },
  button: {
    marginVertical: 16,
  },
});
