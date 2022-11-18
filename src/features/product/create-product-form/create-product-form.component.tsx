import { CategoriesList } from "@/features/categories";
import { FormInput } from "@/features/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import * as z from "zod";

const schema = z.object({
  title: z.string({ required_error: "Product title is required." }).trim(),
  price: z
    .string({ required_error: "Product price is required." })
    .trim()
    .refine((val) => !Number.isNaN(parseInt(val, 10)), {
      message: "Expected number, received a string",
    }),
  description: z
    .string({ required_error: "Product description is required." })
    .trim(),
  imageLink: z
    .string({ required_error: "Product image link is required" })
    .trim(),
  category: z.string({ required_error: "You must choose a category" }).trim(),
});

export type CreateProductFormType = z.infer<typeof schema>;

interface Props {
  onSubmit?: (data: CreateProductFormType) => void;
}

export const CreateProductForm = ({ onSubmit = () => {} }: Props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<CreateProductFormType>({
    resolver: zodResolver(schema),
  });

  return (
    <View style={tw`flex-1  p-4`}>
      <FormInput
        testID="title-input"
        control={control}
        name="title"
        label="Product Title"
        placeholder="Iphone 14"
      />
      <FormInput
        testID="price-input"
        control={control}
        name="price"
        label="Product Price($)"
        placeholder="1200"
        keyboardType="number-pad"
      />
      <FormInput
        testID="description-input"
        control={control}
        name="description"
        label="Product Description"
        placeholder="The best mobile phone in the market"
      />
      <FormInput
        testID="image-link-input"
        control={control}
        name="imageLink"
        label="Product Image Link"
        placeholder="https://..."
      />

      <Text
        style={tw`${
          errors.category ? "text-red-600" : "text-black"
        } mb-1 font-medium`}
      >{`Selected Category: ${watch("category") || ""}`}</Text>
      <Controller
        name="category"
        control={control}
        render={({ field: { value, onChange } }) => (
          <CategoriesList
            activeCategory={value}
            onPressSelect={onChange}
            includeAll={false}
          />
        )}
      />
      {errors.category && (
        <Text
          style={tw`${errors.category ? "text-red-600" : "text-black"} mb-4`}
        >
          {errors.category?.message}
        </Text>
      )}

      <RectButton
        testID="create-product-button"
        onPress={handleSubmit(onSubmit)}
        style={[
          tw`py-4 px-2 bg-black items-center justify-center`,
          { borderRadius: 10 },
        ]}
      >
        <Text style={tw`text-white font-semibold`}>Add Product</Text>
      </RectButton>
    </View>
  );
};
