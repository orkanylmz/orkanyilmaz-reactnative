import { Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';

import type { Category } from '@/api';

interface Props {
  category: Category;
  isActive: boolean;
  onPress?: (name: string) => void;
}

const CategoriesItem = ({ category, isActive, onPress }: Props) => {
  const _onPress = () => {
    onPress?.(category.name);
  };

  return (
    <View style={tw`items-center justify-center flex-1`}>
      <TouchableWithoutFeedback
        onPress={_onPress}
        testID={`category-item-${category.name}`}
      >
        <View
          style={tw`${
            isActive ? 'bg-black' : 'bg-gray-300'
          } mr-4 items-center justify-center rounded-lg py-2 px-3`}
        >
          <Text style={tw`${isActive ? `text-white` : `text-black`} text-sm`}>
            {category.name}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CategoriesItem;
