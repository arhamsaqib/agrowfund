import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../../../colors';
import {MyText} from '../../../../core/MyText';
import Icon from 'react-native-vector-icons/Ionicons';

interface QProps {
  ans?: string;
  question?: string;
}

const Question = (props: QProps) => {
  const [open, setOpen] = useState(false);
  return (
    <View style={{marginVertical: 5}}>
      <TouchableOpacity
        onPress={() => setOpen(!open)}
        style={[
          style.head,
          open && {backgroundColor: COLORS.gradient_secondary},
          !open && {
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#E1E1E1',
          },
        ]}>
        <MyText
          style={[
            style.headTxt,
            open && {color: 'white'},
            !open && {color: '#444444'},
          ]}>
          {props.question ?? 'Frequently Asked Question here?'}
        </MyText>
        {open && <Icon name="chevron-down-outline" size={15} color={'white'} />}
        {!open && (
          <Icon name="chevron-forward-outline" size={15} color={'#444444'} />
        )}
      </TouchableOpacity>
      {open && (
        <View style={style.ansConst}>
          <MyText style={style.ansTxt}>
            {props.ans ??
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
          </MyText>
        </View>
      )}
    </View>
  );
};

export const FAQ = () => {
  return (
    <View style={style.main}>
      <View style={{width: '100%', marginBottom: 10}}>
        <MyText style={style.title}>Frequently Asked Questions</MyText>
      </View>
      <View style={{width: '100%', marginBottom: 10}}>
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </View>
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
  head: {
    //backgroundColor: COLORS.gradient_secondary,
    height: 41,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  headTxt: {
    color: 'white',
    fontSize: 15,
  },
  ansTxt: {
    fontFamily: 'Montserrat-Regular',
    color: '#666666',
  },
  ansConst: {
    backgroundColor: '#fbfafa',
    padding: 20,
    borderRadius: 5,
    borderColor: '#E1E1E1',
    borderWidth: 1,
  },
});
