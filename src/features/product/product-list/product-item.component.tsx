import type { Product } from "@/api";
import { ProductScreenNavigationProp } from "@/features/navigation/types";

import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import tw from "tailwind-react-native-classnames";

interface Props {
  item: Product;
}

const ProductItem = ({ item }: Props) => {
  const navigation = useNavigation<ProductScreenNavigationProp>();

  const onPress = () => {
    navigation.navigate("ProductDetails", { productId: item._id });
  };

  return (
    <TouchableWithoutFeedback style={tw`w-full bg-white`} onPress={onPress}>
      <View style={tw`w-full bg-white shadow-lg rounded-lg h-60 items-center`}>
        <Image
          style={tw`w-full h-2/3 m-2`}
          resizeMode="contain"
          source={{ uri: item?.avatar }}
        />
        <View
          style={tw`h-10 bg-black w-full rounded-lg absolute bottom-0 pl-2 justify-center`}
        >
          <Text numberOfLines={1} style={tw`text-xs text-white font-light`}>
            {item?.name}
          </Text>
          <Text numberOfLines={1} style={tw`text-xs text-white font-light`}>
            {`$${item?.price}`}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductItem;
