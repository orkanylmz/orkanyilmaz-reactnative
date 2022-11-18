import { useQueryClient } from '@tanstack/react-query';
import { View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import tw from 'tailwind-react-native-classnames';

import type { Product } from '@/api/products';
import { useCreateProduct } from '@/api/products';
import type { RootStackScreenProps } from '@/features/navigation';
import type { CreateProductFormType } from '@/features/product';
import { CreateProductForm } from '@/features/product';

export const CreateProductScreen = ({
  navigation,
}: RootStackScreenProps<'CreateProduct'>) => {
  const { mutate: createProduct, isLoading } = useCreateProduct();
  const queryClient = useQueryClient();

  const onSubmit = (data: CreateProductFormType) => {
    createProduct(
      {
        avatar: data.imageLink,
        name: data.title,
        description: data.description,
        category: data.category,
        price: parseInt(data.price, 10),
      },
      {
        onSuccess: (newProduct: Product) => {
          // Updating the cache
          queryClient.setQueryData<Array<Product>>(
            ['products'],
            (oldProducts) => oldProducts && [...oldProducts, newProduct]
          );
          showMessage({
            message: 'Product created successfully',
            type: 'success',
          });
          navigation.goBack();
        },
        onError: (err) => {
          console.log('error: ', err.response);
          showMessage({
            message: 'Error occured creating product',
            type: 'danger',
          });
        },
      }
    );
  };
  return (
    <View style={tw`flex-1 bg-white`}>
      <CreateProductForm onSubmit={onSubmit} isLoading={isLoading} />
    </View>
  );
};
