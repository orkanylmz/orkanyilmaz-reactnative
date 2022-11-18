import { Skeleton } from "moti/skeleton";
import { View } from "react-native";
import tw from "tailwind-react-native-classnames";

export const ProductDetailsSkeleton = () => {
  return (
    <View style={tw`flex-1`}>
      <Skeleton colorMode="light" height={300} width={"100%"} radius={8} />
    </View>
  );
};
