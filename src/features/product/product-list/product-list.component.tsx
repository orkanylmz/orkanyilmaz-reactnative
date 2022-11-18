import { FlashList } from '@shopify/flash-list';
import { useMemo } from 'react';
import { RefreshControl, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import type { Product } from '@/api';
import { useProducts } from '@/api';
import { useCategoryStore } from '@/features/categories';
import ProductListSkeleton from '@/features/product/product-list/product-list-skeleton.component';

import ProductItem from './product-item.component';

const ProductList = () => {
  const activeCategory = useCategoryStore((state) => state.activeCategory);

  const { data, isLoading, refetch, isRefetching } = useProducts();

  const renderItem = ({ item }: { item: Product }) => {
    return (
      <View style={tw`items-center mb-4 w-full p-2`}>
        <ProductItem item={item} />
      </View>
    );
  };

  const products = useMemo(
    () =>
      !data
        ? []
        : activeCategory !== 'All'
        ? data?.filter((c) => c.category === activeCategory)
        : data,
    [data, activeCategory]
  );

  const onRefresh = () => {
    refetch();
  };

  return (
    <View style={tw`flex-1 bg-white mt-4`}>
      {isLoading ? (
        <ProductListSkeleton />
      ) : (
        <FlashList
          refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={onRefresh} />
          }
          renderItem={renderItem}
          estimatedItemSize={200}
          data={products}
          keyExtractor={(_, index) => `item-${index}`}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default ProductList;
