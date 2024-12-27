import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

const CategoryTile = ({ title, color, onPress }) => {
  return (
    <View style={[styles.outerContainer, { backgroundColor: color }]}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.button_pressed_ios] : styles.button
        }
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryTile;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    borderRadius: 8,
    margin: 16,
    height: 150,

    ...Platform.select({
      android: {
        elevation: 2,
        overflow: "hidden",
      },
      ios: {
        shadowColor: "gray",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        backgroundColor: "white",
      },
    }),
  },
  button: {
    flex: 1,
  },
  button_pressed_ios: {
    opacity: 0.25,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
