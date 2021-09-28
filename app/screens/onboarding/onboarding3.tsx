import React from 'react';
import {ScrollView, StyleSheet, View, SafeAreaView} from 'react-native';
import {COLORS} from '../../colors';
import {ButtonStandard} from '../../core/Button';
import {MenuProgress} from '../../core/menuProgress';
import {MyText, TitleText} from '../../core/MyText';
import {TempBox} from './onboarding1';

export const Onboarding3 = ({navigation}: any) => {
  function onNextPress() {
    //navigation.navigate('Onboarding 2');
  }
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={{width: '90%', alignSelf: 'center'}}>
        <View style={{marginTop: 30, marginBottom: 15}}>
          <TempBox />
        </View>
        <View style={{width: '100%'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TitleText style={{}}>This is going</TitleText>
            <TitleText style={styles.titleG}> to be</TitleText>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TitleText style={styles.titleG}>the</TitleText>
            <TitleText> main title</TitleText>
          </View>

          <MyText style={{fontSize: 17, color: '#555555'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </MyText>
        </View>
        <View style={{width: '100%', marginTop: 20}}>
          <MenuProgress three />
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <ButtonStandard title="Get Started" onPress={onNextPress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titleG: {
    color: COLORS.primary_green,
  },
  bottom: {
    // alignItems: 'center',
    width: '90%',
    // justifyContent: 'center',
  },
});
