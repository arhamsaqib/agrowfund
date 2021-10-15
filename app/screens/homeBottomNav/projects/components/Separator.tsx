import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Separator = () => {
  return <View style={styles.divider}></View>;
};

const styles = StyleSheet.create({
  divider: {
    backgroundColor: '#B0B0B0',
    borderWidth: 0.25,
    borderRadius: 1,
    marginVertical: 20,
  },
});
