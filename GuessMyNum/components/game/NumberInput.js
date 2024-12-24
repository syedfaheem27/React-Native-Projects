import { StyleSheet, Text, View, Dimensions } from "react-native";

const NumberInput = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "white",
    marginVertical: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: deviceWidth < 380? 18 :32,
    fontWeight: "bold",
    color: "white",
  },
});

export default NumberInput;
