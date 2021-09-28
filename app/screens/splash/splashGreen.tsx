import React from 'react';
import {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../colors';
import {MyText} from '../../core/MyText';
import {wait} from '../../core/wait';

export const SplashGreen = ({navigation}: any) => {
  useEffect(() => {
    wait(2000).then(() => navigation.replace('Onboarding 1'));
  }, []);
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[COLORS.gradient_primary, COLORS.gradient_secondary]}
      style={styles.linearGradient}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo/logoWhite.png')}
      />
      <Image
        style={styles.logo1}
        source={require('../../assets/logo/textWhite.png')}
      />
      <View
        style={{
          position: 'absolute',
          width: '90%',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 20,
        }}>
        <MyText style={styles.pwd}>Powered by Agrokivu</MyText>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    //fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
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
    color: 'white',
  },
});
