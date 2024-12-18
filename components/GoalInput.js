import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal } from "react-native";

const GoalInput = ({ onAddGoal, visible, onCloseModal }) => {
  const [enteredText, setEnteredText] = useState("");

  function inputChangeHandler(txt) {
    setEnteredText(txt);
  }

  function goalHandler() {
    onAddGoal(enteredText);
    setEnteredText("");
    onCloseModal();
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInp}
          placeholder="Your course goal!"
          onChangeText={inputChangeHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goals" onPress={goalHandler} />
          </View>

          <View style={[styles.button, styles.btnRightEnd]}>
            <Button title="Cancel" onPress={onCloseModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 24,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  textInp: {
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    marginBottom: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  button: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  btnRightEnd: {
    marginRight: 0,
  },
});

export default GoalInput;
