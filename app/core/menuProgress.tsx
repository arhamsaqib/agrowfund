import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '../colors';

interface MPProps {
  one?: boolean;
  two?: boolean;
  three?: boolean;
}

export const MenuProgress = (props: MPProps) => {
  const {one, two, three} = props;
  return (
    <View style={styles.main}>
      <View style={[styles.line, one && styles.max]}></View>
      <View style={[styles.line, two && styles.max]}></View>
      <View style={[styles.line, three && styles.max]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  line: {
    //borderWidth: 1,
    marginRight: 5,
    width: 12,
    height: 3,
    backgroundColor: '#E1E1E1',
    borderRadius: 3,
  },
  max: {
    width: 30,
    backgroundColor: COLORS.primary_green,
  },
});
