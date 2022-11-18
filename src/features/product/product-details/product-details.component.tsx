import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useMemo, useRef } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import { BottomSheetHandle } from '@/components';

interface ProductDetailsProps {
  name?: string;
  price?: number;
  description?: string;
  isLoading: boolean;
}

export const ProductDetails = ({
  name,
  price,
  description,
  isLoading,
}: ProductDetailsProps) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '75%'], []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      handleComponent={BottomSheetHandle}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: -4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
      }}
      animateOnMount={false}
    >
      <View style={tw`flex-1 bg-black px-6`}>
        {isLoading ? (
          <ActivityIndicator
            style={{ marginTop: 15 }}
            animating
            color={'white'}
          />
        ) : (
          <>
            <View style={tw`flex-row items-center justify-between mb-6`}>
              <View style={tw`w-10/12 flex-row`}>
                <Text
                  style={tw`text-white font-bold text-lg flex-grow flex-shrink flex-wrap`}
                  numberOfLines={3}
                >
                  {name}
                </Text>
              </View>
              <Text style={tw`text-white font-bold`}>{`$${price}`}</Text>
            </View>
            <BottomSheetScrollView>
              <Text style={tw`text-white`}>{description}</Text>
            </BottomSheetScrollView>
          </>
        )}
      </View>
    </BottomSheet>
  );
};
