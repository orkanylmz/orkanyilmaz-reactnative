import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RootStackParamList } from '@/features/navigation/types';
import {
  CreateProductScreen,
  HomeScreen,
  ProductDetailsScreen,
} from '@/screens';

import { NavigationContainer } from './navigation-container.component';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitle: '',
        headerTitle: '',
        headerTintColor: 'black',
      }}
    >
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
