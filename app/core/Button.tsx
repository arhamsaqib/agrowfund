import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {COLORS} from '../colors';

interface BProps extends TouchableOpacityProps {
  inverse?: boolean;
  textStyle?: StyleProp<TextStyle>;
  title?: string;
  loading?: boolean;
}

export const ButtonStandard = (props: BProps) => {
  const {inverse, style, textStyle, title, loading, ...rest} = props;
  return (
    <TouchableOpacity
      {...rest}
      style={[styles.main, inverse && styles.inverse, style]}>
      <Text
        style={[
          textStyle,
          styles.txt,
          inverse && {color: COLORS.primary_green},
        ]}>
        {title ?? 'Button'}
      </Text>
      {loading && (
        <View style={styles.lCont}>
          {inverse && (
            <ActivityIndicator color={COLORS.primary_green} size={'small'} />
          )}
          {!inverse && <ActivityIndicator color={'white'} size={'small'} />}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary_green,
    borderRadius: 3,
    marginVertical: 5,
    flexDirection: 'row',
  },
  txt: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    color: 'white',
    letterSpacing: 0,
  },
  inverse: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: COLORS.primary_green,
  },
  lCont: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
});
