import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../../colors';
import {MyText} from '../../../../core/MyText';
import {GlobalStyles} from '../../../../styles/GlobalStyles';
import Slider from '@react-native-community/slider';
import {Separator} from './Separator';

interface DonationCardProps {
  recent?: boolean;
  amount?: string;
}

const Donator = (props: DonationCardProps) => {
  const sourceR = require('../../../../assets/icons/person-heart.png');
  const sourceG = require('../../../../assets/icons/person-heart-grey.png');
  const top = '#efefef';
  const recent = '#e5faf6';
  return (
    <View style={styles.donationCard}>
      <View
        style={{width: '15%', alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={[
            {
              height: 45,
              width: 45,
              borderRadius: 45,

              alignItems: 'center',
              justifyContent: 'center',
            },
            props.recent && {backgroundColor: recent},
            !props.recent && {backgroundColor: top},
          ]}>
          {props.recent && (
            <Image source={sourceR} style={{width: 26, height: 20}} />
          )}
          {!props.recent && (
            <Image source={sourceG} style={{width: 26, height: 20}} />
          )}
        </View>
      </View>
      <View style={{width: '83%'}}>
        <MyText style={styles.fontMed18}>Donator Name</MyText>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '60%',
          }}>
          <MyText>${props.amount ?? '100'}</MyText>
          <View
            style={{
              height: 5,
              width: 5,
              borderRadius: 5,
              backgroundColor: top,
            }}></View>
          <MyText style={{textDecorationLine: 'underline'}}>
            {(props.recent && 'Recent') ?? 'Top'} Donation
          </MyText>
        </View>
      </View>
    </View>
  );
};

export const DonationsCard = () => {
  return (
    <View style={[GlobalStyles.elevated_card]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MyText style={styles.fontMed}>$25000 </MyText>
        <MyText style={styles.monReg}>Funded of $70000</MyText>
      </View>
      <View style={{width: '100%'}}>
        <Slider
          disabled
          style={{width: '100%'}}
          minimumValue={0}
          maximumValue={1}
          thumbTintColor={COLORS.primary_green}
          value={0.6}
          minimumTrackTintColor={COLORS.primary_green}
          //maximumTrackTintColor="#000000"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '90%',
          alignSelf: 'center',
        }}>
        <View style={styles.det}>
          <MyText style={styles.fontMed}>9.2k</MyText>
          <MyText style={styles.monReg}>Shares</MyText>
        </View>
        <View style={styles.det}>
          <MyText style={styles.fontMed}>2.6k</MyText>
          <MyText style={styles.monReg}>Donors</MyText>
        </View>
        <View style={styles.det}>
          <MyText style={styles.fontMed}>2.3k</MyText>
          <MyText style={styles.monReg}>Investors</MyText>
        </View>
      </View>
      <Separator />
      <MyText style={styles.fontMed}>762 People just donated</MyText>
      <Separator />
      <Donator />
      <Donator recent />
    </View>
  );
};

const styles = StyleSheet.create({
  fontMed: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
  },
  fontMed18: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
  fontMed15: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
  },
  monReg: {
    fontFamily: 'Montserrat',
  },
  det: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  donationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});
