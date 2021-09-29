import React from 'react';
import {TextInputProps} from 'react-native';
import {StyleSheet, TextInput} from 'react-native';
import {COLORS} from '../colors';

interface TIProps extends TextInputProps {}

export const TextInputStandard = (props: TIProps) => {
  const {style, ...rest} = props;
  return (
    <TextInput
      {...rest}
      style={[styles.main, style]}
      //placeholder="red"
      placeholderTextColor="black"
    />
  );
};

const styles = StyleSheet.create({
  main: {
    height: 45,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: COLORS.text_input_border,
    fontFamily: 'Montserrat',
    fontSize: 15,
    marginVertical: 5,
  },
});
