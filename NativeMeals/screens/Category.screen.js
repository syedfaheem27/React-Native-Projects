import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/Categories";
import Category from "../components/Category";

const renderCategories = (itemObj) => {
  return <Category title={itemObj.item.title} color={itemObj.item.color} />;
};

const CategoryScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategories}
      />
    </View>
  );
};

export default CategoryScreen;
