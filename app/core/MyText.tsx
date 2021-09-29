import React, {FunctionComponent} from 'react';
import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';
type CustomTextProps = {
  style?: StyleProp<TextStyle>;
  //numberOfLines?: number;
  onPress?(): void;
};
export const MyText: FunctionComponent<CustomTextProps> = ({
  children,
  style,
  onPress,
}) => {
  return (
    <Text onPress={onPress} style={[styles.myText, style]}>
      {children}
    </Text>
  );
};
export const TextMontserrat: FunctionComponent<CustomTextProps> = ({
  children,
  style,
  onPress,
}) => {
  return (
    <Text onPress={onPress} style={[styles.montserrat, style]}>
      {children}
    </Text>
  );
};
export const TitleText: FunctionComponent<CustomTextProps> = ({
  children,
  style,
  onPress,
}) => {
  return (
    <Text onPress={onPress} style={[styles.myText, styles.titleText, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  myText: {
    fontFamily: 'Poppins',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 35,
  },
  montserrat: {
    fontFamily: 'Montserrat',
  },
});
