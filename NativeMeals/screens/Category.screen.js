import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/Categories";
import CategoryTile from "../components/CategoryTile";
import { useNavigation } from "@react-navigation/native";

// const CategoryScreen = ({ navigation }) => {

const CategoryScreen = () => {
  const navigation = useNavigation();
  const pressHanndler = (id) => {
    // navigation.navigate("MealsOverview");
    navigation.navigate("MealsOverview", {
      categoryId: id,
    });
  };
  const renderCategories = (itemObj) => {
    return (
      <CategoryTile
        onPress={pressHanndler.bind(null, itemObj.item.id)}
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
