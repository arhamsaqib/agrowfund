import React, {useState} from 'react';
import {Image, StyleSheet, View, Switch, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../colors';
import {MyText, TextMontserrat} from './MyText';

interface BalanceCard {
  cardName?: string;
  balance?: string;
  onViewAllPress?(): void;
}

export const BalanceCard = (props: BalanceCard) => {
  const [hide, setHide] = useState(false);

  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <MyText style={styles.label}>
            {props.cardName ?? 'Total Donated'}
          </MyText>
          <MyText style={styles.amount}>
            {!hide && '$5055.00'}
            {hide && '$****'}
          </MyText>
        </View>
        <View style={styles.imgCont}>
          <Image
            source={require('../assets/hand.png')}
            //style={{width: 35, height: 35}}
            style={{
              //backgroundColor: '#00CBA2',
              //opacity: 0.1,
              width: 35,
              height: 35,
              tintColor: '#00CBA2',
            }}
          />
        </View>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.bottomCont}>
        <View style={styles.switchCont}>
          <Switch
            value={hide}
            onValueChange={setHide}
            thumbColor={COLORS.primary_green}
            trackColor={{false: '#F2F2F2', true: '#F2F2F2'}}
            ios_backgroundColor={'#F2F2F2'}
          />
          <TextMontserrat style={{marginLeft: 4}}>Hide Balance</TextMontserrat>
        </View>
        <TouchableOpacity
          onPress={props.onViewAllPress}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextMontserrat style={styles.all}>View all</TextMontserrat>
          <Icon name="arrow-forward-outline" size={17} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 140,
    width: 305,
    borderRadius: 10,
    padding: 20,
    elevation: 2,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  label: {
    color: '#666666',
    fontSize: 15,
  },
  amount: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
  },
  all: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  divider: {
    backgroundColor: '#B0B0B0',
    borderWidth: 0.25,
    borderRadius: 1,
    marginVertical: 10,
  },
  imgCont: {
    backgroundColor: '#e5fbf6',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  switchCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
