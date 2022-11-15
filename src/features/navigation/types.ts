import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  ProductDetail: {
    productId: string;
  };
  CreateProduct: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
