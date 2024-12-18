import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children }) => {
  const handlePress = () => console.log("pressed");
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        android_ripple={{ color: "#fde68a" }}
        style={styles.buttonInnerContainer}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    backgroundColor: "#451a03",
    margin: 4,
    borderRadius: 100,
    elevation: 2,
    shadowColor: "#451a03",
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
