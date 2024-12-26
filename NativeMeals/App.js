import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screens/Category.screen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <CategoryScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "green",
  },
});
