import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

// const MealsOverviewScreen = ({ route }) => {

const MealsOverviewScreen = () => {
  const route = useRoute();
  const { categoryId } = route.params;
  return (
    <View>
      <Text>Meals Overview - {categoryId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
