import { Platform, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

const Title = ({ children, style }) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    color: Colors.primary600,
    fontSize: 24,
    textAlign: "center",
    // borderWidth: Platform.OS==='android'?2:0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth:2,
    borderColor: Colors.primary600,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 8,
    maxWidth: "80%",
    marginHorizontal: "auto",
  },
});

export default Title;
