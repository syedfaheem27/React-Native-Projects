import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const GoalInput = ({ onAddGoal }) => {
  const [enteredText, setEnteredText] = useState("");

  function inputChangeHandler(txt) {
    setEnteredText(txt);
  }

  function goalHandler() {
    onAddGoal(enteredText);
    setEnteredText("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInp}
        placeholder="Your course goal!"
        onChangeText={inputChangeHandler}
        value={enteredText}
      />
      <Button title="Add Goals" onPress={goalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
