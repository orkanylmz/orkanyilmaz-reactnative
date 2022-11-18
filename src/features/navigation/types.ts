import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  ProductDetails: {
    productId: string;
  };
  CreateProduct: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare namespace global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}
export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export type ProductScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
