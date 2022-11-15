import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateProductScreen from "@screens/create-product.screen";
import HomeScreen from "@screens/home.screen";
import ProductDetailsScreen from "@screens/product-details.screen";
import { NavigationContainer } from "./navigation-container.component";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="CreateProduct" component={CreateProductScreen} />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
