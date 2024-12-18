import { StyleSheet, ImageBackground, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGame from "./screens/StartGame";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <LinearGradient colors={["#451a03", "#fde68a"]} style={{ flex: 1 }}>
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
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
