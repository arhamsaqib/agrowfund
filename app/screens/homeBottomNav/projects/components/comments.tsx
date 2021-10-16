import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {MyText} from '../../../../core/MyText';
import {Separator} from './Separator';

interface CProps {
  green?: boolean;
  donator_name?: string;
  comment?: string;
  time?: string;
}

const Comment = (props: CProps) => {
  const sourceR = require('../../../../assets/icons/person-heart.png');
  const sourceG = require('../../../../assets/icons/person-heart-grey.png');
  const top = '#efefef';
  const recent = '#e5faf6';
  return (
    <View style={style.commentCont}>
      <View style={{width: '15%', alignItems: 'center', marginRight: '1%'}}>
        <View
          style={[
            {
              height: 45,
              width: 45,
              borderRadius: 45,

              alignItems: 'center',
              justifyContent: 'center',
            },
            props.green && {backgroundColor: recent},
            !props.green && {backgroundColor: top},
          ]}>
          {props.green && (
            <Image source={sourceR} style={{width: 26, height: 20}} />
          )}
          {!props.green && (
            <Image source={sourceG} style={{width: 26, height: 20}} />
          )}
        </View>
      </View>
      <View style={{width: '84%'}}>
        <MyText style={style.head}>
          {props.donator_name ?? 'Donator name donated $35'}
        </MyText>
        <MyText style={style.cmntDesc}>
          {props.comment ??
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.'}
        </MyText>
        <MyText style={style.time}>{props.time ?? '5 hours ago'}</MyText>
      </View>
    </View>
  );
};

export const Comments = () => {
  return (
    <View style={style.main}>
      <View style={{width: '100%', marginBottom: 10}}>
        <MyText style={style.title}>Comments</MyText>
      </View>
      <Comment />
      <Separator />
      <Comment />
      <Separator />
      <Comment />
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
  },
  desc: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#666666',
  },
  main: {
    width: '100%',
    alignItems: 'center',
  },
  commentCont: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    //borderWidth: 1,
    justifyContent: 'center',
    marginVertical: 5,
  },
  head: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#222222',
    marginBottom: 10,
  },
  time: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#222222',
    marginTop: 10,
  },
  cmntDesc: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#222222',
  },
});
