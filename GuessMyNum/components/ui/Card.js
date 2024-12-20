import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

const Card = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary600,
    marginTop: 100,
    marginHorizontal: 24,
    paddingTop: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 12,
    shadowColor: Colors.primary950, //works on android 28 and above
    // shadowOffset: {
    //   height: 4,
    //   width: 4,
    // },
    // shadowRadius: 4,
    // shadowOpacity: 0.5,
  },
});

export default Card;
