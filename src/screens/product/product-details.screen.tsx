import { useProduct } from "@/api";
import type { RootStackScreenProps } from "@/features/navigation";
import { ProductDetails, ProductDetailsImage } from "@/features/product";
import { View } from "react-native";
import tw from "tailwind-react-native-classnames";

export const ProductDetailsScreen = ({
  route,
}: RootStackScreenProps<"ProductDetails">) => {
  const { data, isLoading } = useProduct({ id: route.params.productId });

  return (
    <View style={tw`flex-1 bg-white`}>
      <ProductDetailsImage url={data?.avatar} isLoading={isLoading} />
      <ProductDetails
        name={data?.name}
        price={data?.price}
        description={data?.description}
        isLoading={isLoading}
      />
    </View>
  );
};

export default ProductDetailsScreen;
