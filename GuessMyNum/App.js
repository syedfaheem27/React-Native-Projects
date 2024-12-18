import { StyleSheet, ImageBackground, View } from "react-native";
import StartGame from "./screens/StartGame";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.rootScreen}>
        <ImageBackground
          style={styles.rootScreen}
          source={require("./assets/images/background.png")}
          imageStyle={styles.backgroundImage}
          resizeMode="cover"
        >
          <StartGame />
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: "#fde68a",
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
