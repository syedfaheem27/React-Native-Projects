import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    color: "#f59e0b",
    fontSize: 24,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#f59e0b",
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
});

export default Title;
