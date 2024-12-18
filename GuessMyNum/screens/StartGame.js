import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGame = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        textAlign="center"
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#d97706",
    marginTop: 100,
    marginHorizontal: 24,
    paddingTop: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 12,
    shadowColor: "#451a03", //works on android 28 and above
    // shadowOffset: {
    //   height: 4,
    //   width: 4,
    // },
    // shadowRadius: 4,
    // shadowOpacity: 0.5,
  },
  textInput: {
    borderBottomColor: "#fde68a",
    borderBottomWidth: 1,
    marginVertical: 16,
    width: 50,
    marginHorizontal: "auto",
    color: "#fde68a",
    fontSize: 36,
    fontWeight: "600",
  },
});
