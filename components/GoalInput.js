import { useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

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
        <Image
          style={styles.img}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInp}
          placeholder="Your course goal!"
          onChangeText={inputChangeHandler}
          value={enteredText}
          placeholderTextColor="#eff6ff"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goals" onPress={goalHandler} />
          </View>

          <View style={[styles.button, styles.btnRightEnd]}>
            <Button title="Cancel" onPress={onCloseModal} color="#082f49" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: "#7dd3fc",
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  textInp: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eff6ff",
    padding: 8,
    marginBottom: 6,
    borderRadius: 4,
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
