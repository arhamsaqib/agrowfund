import React, {FunctionComponent} from 'react';
import {StyleProp, StyleSheet, ViewProps} from 'react-native';
import {COLORS} from '../colors';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

interface HeadCardProps {
  style?: StyleProp<ViewProps>;
}

export const HeadCard: FunctionComponent<HeadCardProps> = ({
  children,
  style,
  // onPress,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[COLORS.gradient_primary, COLORS.gradient_secondary]}
      style={[styles.linearGradient, style]}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    //flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    //borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 238,
    width: '100%',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
