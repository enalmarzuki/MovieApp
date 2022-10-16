import React from 'react';
import {TextInput} from 'react-native-paper';
import {colors} from '../../Utils/colors';

type TextInputProps = React.ComponentProps<typeof TextInput>;

type IInputProps = {
  label?: string;
  value: string;
  isRounded: boolean;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  error?: boolean;
  onFocus?: (args: any) => void;
  onBlur?: (args: any) => void;
  onChangeText: (args: any) => void;
} & TextInputProps;

const Input: React.FC<IInputProps> = ({
  label,
  value,
  isRounded,
  keyboardType = 'default',
  error,
  onChangeText,
  onFocus,
  onBlur,
  ...props
}) => {
  return (
    <TextInput
      label={label || ''}
      value={value}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      onFocus={onFocus}
      onBlur={onBlur}
      error={error}
      underlineColor="transparent"
      activeUnderlineColor="transparent"
      placeholderTextColor="#BBBBBB"
      outlineColor="transparent"
      theme={{
        colors: {
          primary: '#fff',
          text: colors.White,
        },
        roundness: isRounded ? 30 : 10,
      }}
      {...props}
    />
  );
};

export default Input;
