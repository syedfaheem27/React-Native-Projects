import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.primary200,
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 8,
  },
});

export default InstructionText;
