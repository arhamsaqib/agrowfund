import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import {MyText, TextMontserrat, TitleText} from '../../core/MyText';
import {TextInputStandard} from '../../core/Textinput';
import {AuthCard} from './components/card';
import CheckBox from '@react-native-community/checkbox';
import {COLORS} from '../../colors';
import {ButtonStandard} from '../../core/Button';
import {HeadCard} from '../../core/HeadCard';
import {HeadBranding} from '../../core/HeadBranding';
import Icon from 'react-native-vector-icons/Ionicons';

export const LWG = () => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: COLORS.text_input_border,
        alignItems: 'center',
        height: 47,
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
      }}>
      <Icon name="logo-google" size={27} color="#EA4335" />
      <MyText style={{marginLeft: 10}}>Sign in with Google</MyText>
    </TouchableOpacity>
  );
};
export const LWFB = () => {
  return (
    <TouchableOpacity
      style={{
        //borderWidth: 1,
        //borderColor: COLORS.text_input_border,
        alignItems: 'center',
        height: 47,
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
        backgroundColor: '#4267B2',
      }}>
      <Icon
        name="logo-facebook"
        size={27}
        color="white"
        style={{borderRadius: 10}}
      />
      <MyText style={{marginLeft: 10, color: 'white'}}>
        Sign in with Facebook
      </MyText>
    </TouchableOpacity>
  );
};

export const Signin = ({navigation}: any) => {
  function onForgetPress() {}
  function onSignUpPress() {
    navigation.navigate('Signup');
  }
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
      <View style={{width: '90%', marginTop: -40}}>
        <AuthCard>
          <View style={{width: '90%', marginBottom: 20}}>
            <TitleText style={{fontSize: 30}}>Sign In</TitleText>
          </View>

          <View style={{width: '90%', marginTop: 5}}>
            <TextMontserrat style={styles.fieldHead}>Email</TextMontserrat>
            <TextInputStandard
              autoCapitalize="none"
              placeholder="Enter your email"
            />
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
      <View style={{width: '90%'}}>
        <LWG />
        <LWFB />
      </View>
      <View style={styles.bottom}>
        <TextMontserrat style={[styles.bottomText]}>
          Don't have any account?{' '}
        </TextMontserrat>
        <TextMontserrat
          onPress={onSignUpPress}
          style={[styles.bottomText, {fontWeight: 'bold'}]}>
          Sign Up
        </TextMontserrat>
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
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
  },
  bottomText: {
    fontSize: 15,
  },
});
