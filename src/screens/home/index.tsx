import { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import { CreateProductButton } from '@/components';
import { CategoriesList, useCategoryStore } from '@/features/categories';
import type { RootStackScreenProps } from '@/features/navigation/types';
import { ProductList } from '@/features/product';

export const HomeScreen = ({ navigation }: RootStackScreenProps<'Home'>) => {
  const setActiveCategory = useCategoryStore(
    (state) => state.setActiveCategory
  );

  const activeCategory = useCategoryStore((state) => state.activeCategory);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Upayments Store',
    });
  }, [navigation]);

  const onPressCreateProduct = () => {
    navigation.navigate('CreateProduct');
  };

  const onPressCategory = (name: string) => {
    setActiveCategory(name);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <CategoriesList
        activeCategory={activeCategory}
        onPressSelect={onPressCategory}
      />
      <ProductList />
      <CreateProductButton onPress={onPressCreateProduct} />
    </SafeAreaView>
  );
};
