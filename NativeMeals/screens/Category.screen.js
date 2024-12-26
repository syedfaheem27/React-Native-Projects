import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/Categories";
import CategoryTile from "../components/CategoryTile";

const renderCategories = (itemObj) => {
  return <CategoryTile title={itemObj.item.title} color={itemObj.item.color} />;
};

const CategoryScreen = () => {
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
