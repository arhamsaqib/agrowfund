import React from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import {MyText, TextMontserrat, TitleText} from '../../core/MyText';
import {TextInputStandard} from '../../core/Textinput';
import {AuthCard} from './components/card';
import CheckBox from '@react-native-community/checkbox';
import {COLORS} from '../../colors';
import {ButtonStandard} from '../../core/Button';
import {HeadCard} from '../../core/HeadCard';
import {Image} from 'react-native';
import {HeadBranding} from '../../core/HeadBranding';

export const Signin = () => {
  function onForgetPress() {}
  return (
    <View style={styles.main}>
      <HeadCard>
        <SafeAreaView
          style={{
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <HeadBranding />
        </SafeAreaView>
      </HeadCard>
      <View style={{width: '90%', marginTop: -30}}>
        <AuthCard>
          <View style={{width: '90%', marginBottom: 20}}>
            <TitleText style={{fontSize: 30}}>Sign In</TitleText>
          </View>

          <View style={{width: '90%', marginTop: 5}}>
            <TextMontserrat style={styles.fieldHead}>Email</TextMontserrat>
            <TextInputStandard placeholder="Enter your email" />
          </View>

          <View style={{width: '90%', marginTop: 5}}>
            <TextMontserrat style={styles.fieldHead}>Password</TextMontserrat>
            <TextInputStandard secureTextEntry />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <View style={styles.checkbox}>
              <CheckBox
                boxType="square"
                onFillColor={COLORS.grey}
                onCheckColor="white"
                onTintColor={COLORS.grey}
              />
              <TextMontserrat style={[styles.fieldHead, styles.sec]}>
                Remember me
              </TextMontserrat>
            </View>
            <MyText
              onPress={onForgetPress}
              style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>
              Forget Password?
            </MyText>
          </View>
          <View style={{width: '90%', marginTop: 20}}>
            <ButtonStandard title="Sign In" />
          </View>
        </AuthCard>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  fieldHead: {
    fontFamily: 'Montserrat-Medium',
  },
  sec: {
    color: '#666666',
    marginLeft: 5,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    //width: '90%',
    marginVertical: 5,
  },
});
