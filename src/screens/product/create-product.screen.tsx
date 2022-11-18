import { Product, useCreateProduct } from "@/api/products";
import { RootStackScreenProps } from "@/features/navigation";
import { CreateProductForm, CreateProductFormType } from "@/features/product";
import { useQueryClient } from "@tanstack/react-query";
import { View } from "react-native";
import { showMessage } from "react-native-flash-message";
import tw from "tailwind-react-native-classnames";

export const CreateProductScreen = ({
  navigation,
}: RootStackScreenProps<"CreateProduct">) => {
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
            ["products"],
            (oldProducts) => oldProducts && [...oldProducts, newProduct]
          );
          showMessage({
            message: "Product created successfully",
            type: "success",
          });
          navigation.goBack();
        },
        onError: (err) => {
          console.log("error: ", err.response);
        },
      }
    );
  };
  return (
    <View style={tw`flex-1 bg-white`}>
      <CreateProductForm onSubmit={onSubmit} />
    </View>
  );
};
