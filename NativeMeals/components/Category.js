import { Text, View } from "react-native";

const Category = ({ title, color }) => {
  return (
    <View style={{ backgroundColor: color }}>
      <Text>{title}</Text>
    </View>
  );
};

export default Category;
