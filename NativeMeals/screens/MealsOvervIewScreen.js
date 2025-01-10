import { useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/Categories";
import MealItem from "../components/MealItem";

// const MealsOverviewScreen = ({ route }) => {

const MealsOverviewScreen = () => {
  const route = useRoute();
  const { categoryId } = route.params;

  const selectedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });
  const renderMealItem = (itemObj) => {
    const item = itemObj.item;
    const props = {
      title: item.title,
      affordability: item.affordability,
      complexity: item.complexity,
      imageUrl: item.imageUrl,
      duration: item.duration,
    };
    return <MealItem {...props} />;
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
