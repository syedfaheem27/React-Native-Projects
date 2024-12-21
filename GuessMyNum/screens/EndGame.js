import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const EndGame = ({ userNumber, numRounds, onStartNew }) => {
  return (
    <View style={styles.rootScreen}>
      <Title style={styles.title}>Game Over!!!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summary}>
        You needed <Text style={styles.highlight}>{numRounds}</Text> tries to
        guess <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <View style={styles.btnContainer}>
        <PrimaryButton onPress={onStartNew.bind(null, 0)}>
          Start a new game
        </PrimaryButton>
      </View>
    </View>
  );
};

export default EndGame;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 32,
    alignSelf: "stretch",
    marginHorizontal: 48,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 4,
    borderColor: Colors.primary950,
    overflow: "hidden",
    marginVertical: 24,
  },
  image: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  summary: {
    fontFamily: "open-sans",
    fontSize: 18,
  },
  highlight: {
    fontFamily: "open-sans-bold",
  },
  btnContainer: {
    marginVertical: 24,
    width: "50%",
  },
});
