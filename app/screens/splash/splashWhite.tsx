import React from 'react';
import {SafeAreaView, StyleSheet, Image, View} from 'react-native';
import {MyText} from '../../core/MyText';

export const SplashWhite = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo/logoGreen.png')}
      />
      <Image
        style={styles.logo1}
        source={require('../../assets/logo/textGreen.png')}
      />
      <View
        style={{
          position: 'absolute',
          width: '90%',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 20,
        }}>
        <MyText style={[styles.pwd, {fontFamily: 'Montserrat'}]}>
          Powered by Agrokivu
        </MyText>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  logo: {
    width: 140,
    height: 134,
    marginBottom: 20,
  },
  logo1: {
    width: 212,
    height: 17,
    //marginBottom: 20,
  },
  pwd: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 27,
    textAlign: 'center',
  },
});
