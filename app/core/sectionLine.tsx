import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {COLORS} from '../colors';

export const SectionLine = () => {
  return (
    <View style={styles.main}>
      <View style={styles.line}></View>
      <Image
        style={{
          height: 9,
          width: 5,
          marginHorizontal: 5,
          //borderWidth: 1,
          //backgroundColor: COLORS.gradient_primary,
        }}
        source={require('../assets/sectionlinevector.png')}
      />
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    width: 30,
    borderWidth: 0.5,
    borderColor: 'white',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
