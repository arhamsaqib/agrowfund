import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

export const SettingsMain = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.main}>
      <Text>Settings Main</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
});
