import { Category, useCategories } from "@/api";

import { useMemo } from "react";
import { FlatList, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import CategoriesItem from "./categories-item.component";
import CategoriesSkeleton from "./categories-skeleton.component";

interface Props {
  activeCategory: string;
  onPressSelect: (name: string) => void;
  includeAll?: boolean;
}

const CategoriesList = ({
  activeCategory,
  onPressSelect,
  includeAll = true,
}: Props) => {
  const { data, isLoading } = useCategories();

  const renderItem = ({ item }: { item: Category }) => {
    return (
      <CategoriesItem
        category={item}
        isActive={activeCategory === item.name}
        onPress={onPressSelect}
      />
    );
  };

  const categories = useMemo(
    () =>
      data ? (includeAll ? [{ name: "All", _id: "all" }, ...data] : data) : [],
    [data]
  );

  return (
    <View style={tw`h-16 items-center justify-center ml-2`}>
      {isLoading ? (
        <CategoriesSkeleton />
      ) : data ? (
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(_, index) => `item-${index}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      ) : null}
    </View>
  );
};

export default CategoriesList;
