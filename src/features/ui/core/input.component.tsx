import { forwardRef, useCallback, useState } from 'react';
import type { TextInputProps } from 'react-native';
import { Text, TextInput, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export interface InputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
}

export const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const { label, error, ...inputProps } = props;

  const [isFocussed, setIsFocussed] = useState(false);
  const onBlur = useCallback(() => setIsFocussed(false), []);
  const onFocus = useCallback(() => setIsFocussed(true), []);

  const borderColor = error
    ? 'border-red-600'
    : isFocussed
    ? 'border-black'
    : 'border-gray-400';

  const bgColor = error ? 'bg-red-50' : 'bg-white';

  return (
    <View style={tw`mb-4`}>
      {label ? <Text style={tw`mb-1 font-medium`}>{`${label}:`}</Text> : null}
      <TextInput
        ref={ref}
        placeholderTextColor={'gray'}
        style={tw`h-12 mt-0 border ${borderColor} rounded-md ${bgColor} pl-4`}
        onBlur={onBlur}
        onFocus={onFocus}
        {...inputProps}
      />
      {error && (
        <Text style={tw`${error ? 'text-red-600' : 'text-black'}`}>
          {error}
        </Text>
      )}
    </View>
  );
});
