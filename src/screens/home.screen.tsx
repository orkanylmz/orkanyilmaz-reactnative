import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <RectButton
        style={{ width: 200, height: 50, backgroundColor: "blue" }}
        onPress={() => navigation.navigate("ProductDetails")}
      >
        <Text>Go to Product Details</Text>
      </RectButton>
    </View>
  );
};

export default HomeScreen;
