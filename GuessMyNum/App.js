import { StyleSheet, ImageBackground, View, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGame from "./screens/StartGame";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Game from "./screens/Game";
import Colors from "./constants/Colors";
import EndGame from "./screens/EndGame";

//prevents auto hiding of the splash screens while an async operation is going on
SplashScreen.preventAutoHideAsync();

// Set the animation options.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function App() {
  const [selectedNum, setSelectedNum] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [numRounds, setNumRounds] = useState(0);

  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  const selectNumberHandler = (num) => setSelectedNum(num);
  const gameOverHandler = (numRounds) => {
    setIsGameOver(true);
    setNumRounds(numRounds);
  };

  const startNewGameHandler = (numRounds) => {
    setSelectedNum(null);
    setIsGameOver(false);
    setNumRounds(numRounds);
  };

  let screen = <StartGame onSelectNumber={selectNumberHandler} />;

  useEffect(() => {
    if (loaded) SplashScreen.hide();
  }, [loaded]);

  if (!loaded) return null;

  if (selectedNum)
    screen = <Game userNumber={selectedNum} onGameOver={gameOverHandler} />;

  if (isGameOver)
    screen = (
      <EndGame
        userNumber={selectedNum}
        numRounds={numRounds}
        onStartNew={startNewGameHandler}
      />
    );

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary950, Colors.primary200]}
        style={{ flex: 1 }}
      >
        <View style={styles.rootScreen}>
          <ImageBackground
            style={styles.rootScreen}
            source={require("./assets/images/background.png")}
            imageStyle={styles.backgroundImage}
            resizeMode="cover"
          >
            <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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
