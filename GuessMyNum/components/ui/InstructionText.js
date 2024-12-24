import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.primary200,
    fontFamily: "open-sans-bold",
    fontSize: 22,
    marginTop: 8,
    maxWidth:'80%',
    marginHorizontal:'auto'
  },
});

export default InstructionText;
