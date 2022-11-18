import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import { ScrollView } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";

const Spacer = ({ height = 36, width = 10 }) => (
  <MotiView style={{ height, width }} />
);

const CategoriesSkeleton = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={tw`h-16 `}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Skeleton colorMode="light" height={38} width={100} radius={8} />
      <Spacer />
      <Skeleton colorMode="light" height={38} width={100} radius={8} />
      <Spacer />
      <Skeleton colorMode="light" height={38} width={100} radius={8} />
      <Spacer />
      <Skeleton colorMode="light" height={38} width={100} radius={8} />
      <Spacer />
      <Skeleton colorMode="light" height={38} width={100} radius={8} />
      <Spacer />
    </ScrollView>
  );
};

export default CategoriesSkeleton;
