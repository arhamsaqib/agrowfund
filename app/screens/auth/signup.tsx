import React from 'react';
import {StyleSheet, Text, SafeAreaView, View, ScrollView} from 'react-native';
import {TextMontserrat, TitleText} from '../../core/MyText';
import {TextInputStandard} from '../../core/Textinput';
import {AuthCard} from './components/card';
import CheckBox from '@react-native-community/checkbox';
import {COLORS} from '../../colors';
import {ButtonStandard} from '../../core/Button';
import {HeadCard} from '../../core/HeadCard';
import {HeadBranding} from '../../core/HeadBranding';
import {LWFB, LWG} from './signin';

export const Signup = ({navigation}: any) => {
  function onSigninPress() {
    navigation.navigate('Signin');
  }
  function onSignUp() {
    navigation.navigate('Bottom Tabs');
  }
  return (
    <View style={styles.main}>
      <ScrollView style={{width: '100%', alignSelf: 'center'}}>
        <HeadCard>
          <SafeAreaView
            style={{
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <HeadBranding />
          </SafeAreaView>
        </HeadCard>
        <View style={{width: '90%', marginTop: -30, alignSelf: 'center'}}>
          <AuthCard>
            <View style={{width: '90%', marginBottom: 20}}>
              <TitleText style={{fontSize: 30}}>Sign Up</TitleText>
            </View>
            <View style={{width: '90%'}}>
              <TextMontserrat style={styles.fieldHead}>Name</TextMontserrat>
              <TextInputStandard placeholder="First Name" />
              <TextInputStandard placeholder="Last Name" />
            </View>
            <View style={{width: '90%', marginTop: 5}}>
              <TextMontserrat style={styles.fieldHead}>Email</TextMontserrat>
              <TextInputStandard placeholder="Enter your email" />
            </View>
            <View style={{width: '90%', marginTop: 5}}>
              <TextMontserrat style={styles.fieldHead}>Phone</TextMontserrat>
              <TextInputStandard placeholder="Phone Number" />
            </View>
            <View style={{width: '90%', marginTop: 5}}>
              <TextMontserrat style={styles.fieldHead}>Password</TextMontserrat>
              <TextInputStandard secureTextEntry />
            </View>
            <View style={{width: '90%', marginTop: 5}}>
              <TextMontserrat style={styles.fieldHead}>
                Confirm Password
              </TextMontserrat>
              <TextInputStandard secureTextEntry />
            </View>
            <View style={styles.checkbox}>
              <CheckBox
                boxType="square"
                onFillColor={COLORS.grey}
                onCheckColor="white"
                onTintColor={COLORS.grey}
              />
              <TextMontserrat style={[styles.fieldHead, styles.sec]}>
                Register as investor.
              </TextMontserrat>
            </View>
            <View style={styles.checkbox}>
              <View style={{}}>
                <CheckBox
                  boxType="square"
                  onFillColor={COLORS.grey}
                  onCheckColor="white"
                  onTintColor={COLORS.grey}
                />
              </View>
              <View style={{width: '80%'}}>
                <TextMontserrat style={[styles.fieldHead, styles.sec]}>
                  I agree to Agrowfund's Terms of Service and Privacy policy.
                </TextMontserrat>
              </View>
            </View>
            <View style={{width: '90%', marginTop: 20}}>
              <ButtonStandard title="Register Now" onPress={onSignUp} />
            </View>
          </AuthCard>
          <View style={{marginTop: 40}}></View>
          <LWG />
          <LWFB />
          <View style={styles.bottom}>
            <TextMontserrat style={[styles.bottomText]}>
              Already have any account?{' '}
            </TextMontserrat>
            <TextMontserrat
              onPress={onSigninPress}
              style={[styles.bottomText, {fontWeight: 'bold'}]}>
              Sign In
            </TextMontserrat>
          </View>
        </View>
      </ScrollView>
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
    width: '90%',
    marginVertical: 5,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //position: 'absolute',
    // bottom: 20,
    marginVertical: 40,
  },
  bottomText: {
    fontSize: 15,
  },
});
