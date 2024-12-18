import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/Colors";

const StartGame = ({ onSelectNumber }) => {
  const [enteredText, setEnteredText] = useState("");

  const inputTextHandler = (txt) => {
    setEnteredText(txt);
  };

  const confirmTextHandler = () => {
    const num = parseInt(enteredText, 10);
    if (isNaN(num) || num <= 0 || num > 99) {
      Alert.alert("Invalid Number", "The number should be between 1 and 99", [
        { text: "Okay", style: "cancel", onPress: resetTextHandler },
      ]);
      return;
    }

    onSelectNumber(num);
  };
  const resetTextHandler = () => setEnteredText("");

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        textAlign="center"
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredText}
        onChangeText={inputTextHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetTextHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmTextHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary600,
    marginTop: 100,
    marginHorizontal: 24,
    paddingTop: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 12,
    shadowColor: Colors.primary950, //works on android 28 and above
    // shadowOffset: {
    //   height: 4,
    //   width: 4,
    // },
    // shadowRadius: 4,
    // shadowOpacity: 0.5,
  },
  textInput: {
    borderBottomColor: Colors.primary200,
    borderBottomWidth: 2,
    marginVertical: 16,
    width: 50,
    marginHorizontal: "auto",
    color: Colors.primary200,
    fontSize: 36,
    fontWeight: "600",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
  },
  buttonContainer: {
    flex: 1,
  },
});
