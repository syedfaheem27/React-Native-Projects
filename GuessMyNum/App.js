import { StyleSheet, View } from "react-native";
import StartGame from "./screens/StartGame";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.rootScreen}>
        <StartGame />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: "#fde68a",
    flex: 1,
  },
});
