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
  grey?: boolean;
}

export const ButtonStandard = (props: BProps) => {
  const {inverse, style, textStyle, title, loading, grey, ...rest} = props;
  return (
    <TouchableOpacity
      {...rest}
      style={[
        styles.main,
        inverse && styles.inverse,
        grey && styles.greyCont,
        style,
      ]}>
      <Text
        style={[
          textStyle,
          styles.txt,
          inverse && {color: COLORS.primary_green},
          grey && styles.greyTxt,
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
  greyCont: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#B0B0B0',
  },
  greyTxt: {
    color: '#666666',
  },
});
