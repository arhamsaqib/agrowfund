import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS} from '../../../colors';
import {MyText, TextMontserrat} from '../../../core/MyText';

interface CardProps {
  active?: boolean;
  description?: boolean;
}

const Card = (props: CardProps) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={[styles.imgCont, props.active && styles.active]}>
          {!props.active && (
            <Image
              source={require('../../../assets/hand.png')}
              style={{
                //backgroundColor: '#00CBA2',
                //opacity: 0.1,
                width: 40,
                height: 40,
                tintColor: '#00CBA2',
              }}
            />
          )}
          {props.active && (
            <Image
              source={require('../../../assets/hand.png')}
              style={{
                //backgroundColor: '#00CBA2',
                //opacity: 0.1,
                width: 40,
                height: 40,
                tintColor: 'white',
              }}
            />
          )}
        </View>
        <TextMontserrat style={[{width: '80%', color: '#666666'}]}>
          Lorem Ipsum is simply dummy of text of the of and industry.
        </TextMontserrat>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginLeft: '20%',
        }}>
        <View
          style={[
            styles.dot,
            props.active && styles.active,
            !props.active && styles.inactive,
          ]}></View>
        <TextMontserrat style={{color: '#666666'}}>1 hour ago</TextMontserrat>
      </View>
    </TouchableOpacity>
  );
};

export const Notifications = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={{width: '90%', marginVertical: 10}}>
        <MyText style={styles.heading}>Notifications</MyText>
        <Card active />
        <Card active />
        <Card active />
        <Card active />
        <Card active />
        <Card />
        <Card />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
  },
  dot: {
    height: 4,
    width: 4,
    borderRadius: 4,
    marginRight: 10,
  },
  active: {
    backgroundColor: COLORS.primary_green,
  },
  inactive: {
    backgroundColor: COLORS.grey,
  },
  card: {
    //borderWidth: 1,
    marginVertical: 10,
    borderRadius: 3,
  },
  imgCont: {
    backgroundColor: '#e5fbf6',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
