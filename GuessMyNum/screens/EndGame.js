import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const EndGame = ({ userNumber, numRounds, onStartNew }) => {
  const { width, height } = useWindowDimensions();
  console.log(width,height)

  const marginTop = height < 380 ? 20 : 36;

  let imageSize = 380;

  if (width < 300) imageSize = 100;

  if (height < 200) imageSize = 100;

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={{flex:1}}>
      <View style={styles.rootScreen}>
        <Title style={[styles.title, { marginTop }]}>Game Over!!!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  );
};

export default EndGame;

// const deviceWidth = Dimensions.get("window").width;

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
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
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
