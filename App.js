import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler() {
    setCourseGoals((goal) => [
      ...goal,
      {
        id: Math.random().toString(),
        text: enteredText,
      },
    ]);
  }

  function inputChangeHandler(txt) {
    setEnteredText(txt);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInp}
          placeholder="Your course goal!"
          onChangeText={inputChangeHandler}
        />
        <Button title="Add Goals" onPress={goalInputHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
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
  inputContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  textInp: {
    width: "70%",
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
    borderWidth: 1,
    borderColor: "red",
    padding: 4,
  },
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
