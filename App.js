import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  function goalInputHandler() {
    console.log(enteredText);
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
        <Text>List of goals...</Text>
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
  },
});
