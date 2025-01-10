import { useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/Categories";

// const MealsOverviewScreen = ({ route }) => {

const MealsOverviewScreen = () => {
  const route = useRoute();
  const { categoryId } = route.params;

  const selectedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId) >= 0;
  });
  const renderMealItem = (itemObj) => {
    return (
      <View>
        <Text>{itemObj.item.title}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={selectedMeals}
        renderItem={renderMealItem}
      />
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
