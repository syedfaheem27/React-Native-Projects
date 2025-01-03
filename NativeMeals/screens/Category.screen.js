import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/Categories";
import CategoryTile from "../components/CategoryTile";

const CategoryScreen = ({ navigation }) => {
  const pressHanndler = () => {
    navigation.navigate("MealsOverview");
  };
  const renderCategories = (itemObj) => {
    return (
      <CategoryTile
        onPress={pressHanndler}
        title={itemObj.item.title}
        color={itemObj.item.color}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategories}
      numColumns={2}
    />
  );
};

export default CategoryScreen;
