import { FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';

interface Props {
  onPress?: () => void;
}

export const CreateProductButton = ({ onPress }: Props) => {
  return (
    <RectButton
      onPress={onPress}
      style={[
        tw` bg-gray-400 absolute bottom-10 z-10 right-10 items-center justify-center`,
        {
          width: 50,
          height: 50,
          borderRadius: 25,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,

          elevation: 9,
        },
      ]}
    >
      <FontAwesome name="plus" size={24} color="black" />
    </RectButton>
  );
};
