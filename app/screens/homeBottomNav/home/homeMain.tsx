import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

export const HomeMain = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.main}>
      <Text>Home Main</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
});
