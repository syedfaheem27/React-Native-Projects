import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

const MealItem = ({ title, duration, complexity, affordability, imageUrl }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonStyle : null)}
      >
        <View style={styles.innerContainer}>
          <View style={styles.imageTitle}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detail}>{duration}m</Text>
            <Text style={styles.detail}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detail}>{affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  outerContainer: {
    marginTop: 4,
    marginBottom: 16,
    width: "90%",
    marginHorizontal: "auto",
    borderRadius: 8,
    elevation: 8,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "#ccc",
    shadowOpacity: 0.9,
    shadowRadius: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonStyle: {
    opacity: 0.5,
  },
  innerContainer: {},
  imageTitle: {},
  detailsContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    flexDirection: "row",
  },
  detail: {
    marginRight: 4,
    fontSize: 12,
  },
  title: {
    textAlign: "center",
  },
});
