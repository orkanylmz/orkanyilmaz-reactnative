import { Skeleton } from "moti/skeleton";
import { Image, View } from "react-native";
import tw from "tailwind-react-native-classnames";

interface Props {
  url?: string;
  isLoading: boolean;
}

export const ProductDetailsImage = ({ url, isLoading }: Props) => {
  return isLoading ? (
    <Skeleton colorMode="light" height={300} width={"100%"} radius={8} />
  ) : url ? (
    <Image
      style={tw`w-full h-2/5 mt-4`}
      source={{ uri: url }}
      resizeMode="contain"
    />
  ) : (
    <View style={tw`w-full h-2/5 bg-gray-400`} />
  );
};
