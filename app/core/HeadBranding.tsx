import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {MyText} from './MyText';

export const HeadBranding = () => {
  return (
    <View style={styles.head}>
      <Image
        style={{height: 45, width: 46, marginRight: 10}}
        //source={require('../../assets/logo/logoWhite.png')}
        source={require('../assets/logo/logoWhite.png')}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MyText style={styles.headText}>AGROW</MyText>
        <MyText style={[styles.headText, {fontWeight: 'bold'}]}>FUND</MyText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    //  borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  headText: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
});
