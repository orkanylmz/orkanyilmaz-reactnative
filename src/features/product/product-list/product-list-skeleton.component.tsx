import { FlashList } from "@shopify/flash-list";
import { Skeleton } from "moti/skeleton";
import { View } from "react-native";
import tw from "tailwind-react-native-classnames";

const ProductListSkeleton = () => {
  const renderItem = () => {
    return (
      <View style={tw`items-center mb-4 w-full p-2`}>
        <Skeleton colorMode="light" height={240} width={"100%"} radius={8} />
      </View>
    );
  };

  return (
    <FlashList
      data={[1, 2, 3, 4, 5, 6, 7, 8]}
      renderItem={renderItem}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      estimatedItemSize={240}
    />
  );
};

export default ProductListSkeleton;
