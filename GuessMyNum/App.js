import { StyleSheet, ImageBackground, View, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGame from "./screens/StartGame";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Game from "./screens/Game";
import Colors from "./constants/Colors";

export default function App() {
  const [selectedNum, setSelectedNum] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const selectNumberHandler = (num) => setSelectedNum(num);

  const gameOverHandler = () => setIsGameOver(true);

  let screen = <StartGame onSelectNumber={selectNumberHandler} />;

  if (selectedNum)
    screen = <Game userNumber={selectedNum} onGameOver={gameOverHandler} />;

  if (isGameOver)
    return (
      <View>
        <Text>Game over</Text>
      </View>
    );

  return (
    <>
      <StatusBar style="dark" />
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
