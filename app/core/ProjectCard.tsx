import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import Slider from '@react-native-community/slider';
import {MyText, TextMontserrat} from '../core/MyText';
import {COLORS} from '../colors';
import {CustomSlider} from './Slider';

interface PC {
  title?: string;
  description?: string;
  funded?: string;
  days_remaining?: string;
  goal?: string;
  separator?: boolean;
  onPress?(): void;
  expanded?: boolean;
}

export const ProjectCard = (props: PC) => {
  if (!props.expanded) {
    return (
      <TouchableOpacity onPress={props.onPress} style={styles.smallCardMain}>
        <View style={{width: '35%'}}>
          <ImageBackground
            borderRadius={10}
            source={require('../assets/projectThumb.jpeg')}
            style={{borderRadius: 10, height: 140}}>
            <View
              style={{
                //borderWidth: 1,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                padding: 10,
              }}>
              <Icon
                name="play-circle-outline"
                color="white"
                size={25}
                onPress={() => {}}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={{width: '60%'}}>
          <MyText style={[styles.title, {marginBottom: 5}]}>
            {props.title ?? 'This is going to be the title'}
          </MyText>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 0,
            }}>
            <MyText style={[styles.titleSmall]}>
              Goal: ${props.goal ?? '20,000'}
            </MyText>
            <MyText style={[styles.titleSmall]}>
              {props.funded ?? '12,000'} Funded
            </MyText>
          </View>
          <View style={{width: '100%'}}>
            <CustomSlider />
          </View>
          <MyText style={[styles.titleSmall]}>
            {props.days_remaining ?? '45'} Days Remaining
          </MyText>
        </View>
      </TouchableOpacity>
    );
  } else
    return (
      <TouchableOpacity onPress={props.onPress} style={styles.main}>
        <ImageBackground
          borderRadius={10}
          source={require('../assets/projectThumb.jpeg')}
          style={{height: 210, width: '100%', borderRadius: 10}}>
          <View
            style={{
              //borderWidth: 1,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              padding: 10,
            }}>
            <Icon
              name="play-circle-outline"
              color="white"
              size={25}
              onPress={() => {}}
            />
          </View>
        </ImageBackground>
        <MyText style={[styles.title, {marginVertical: 15}]}>
          {props.title ?? 'This is going to be the title'}
        </MyText>
        <TextMontserrat style={styles.desc}>
          {props.description ??
            'Lorem Ipsum is simply dummy text of the of and typesetting industry '}
          {'Lorem Ipsum has been the industrys dummy t...'}
        </TextMontserrat>
        <MyText style={[styles.title, {fontSize: 14, marginBottom: 5}]}>
          ${props.funded ?? '12,000'} Funded
        </MyText>
        <View style={{width: '100%'}}>
          <CustomSlider />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <MyText style={[styles.title, {fontSize: 14}]}>
            {props.days_remaining ?? '45'} Days Remaining
          </MyText>
          <MyText style={[styles.title, {fontSize: 14}]}>
            Goal: ${props.goal ?? '20,000'}
          </MyText>
        </View>
        {props.separator && <View style={styles.divider}></View>}
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  main: {
    alignSelf: 'center',
    width: '100%',
    marginVertical: 10,
    //borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
  titleSmall: {
    fontFamily: 'Poppins',
    fontSize: 13,
  },
  desc: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 15,
  },
  divider: {
    backgroundColor: '#B0B0B0',
    borderWidth: 0.25,
    borderRadius: 1,
    marginVertical: 20,
  },
  smallCardMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //borderWidth: 1,
    marginVertical: 10,
  },
});
