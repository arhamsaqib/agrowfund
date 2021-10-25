import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../../colors';
import {GlobalStyles} from '../../../../styles/GlobalStyles';

interface HECProps {
  doubleTick?: boolean;
  repeat?: boolean;
  complete?: boolean;
  active?: boolean;
}

export const HistoryEventCard = (props: HECProps) => {
  const inactive = '#efefef';
  const active = '#e5faf6';
  return (
    <View style={styles.main}>
      <View
        style={[
          {
            height: 30,
            width: 30,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          },
          props.active && {backgroundColor: COLORS.gradient_secondary},
          !props.active && {backgroundColor: COLORS.grey},
        ]}>
        {props.doubleTick && (
          <Icon name="checkmark-done-outline" color={'white'} size={18} />
        )}
        {props.complete && <Icon name="flag-outline" color="white" size={18} />}
        {props.repeat && <Icon name="repeat-outline" color="white" size={18} />}
      </View>
      <View style={{marginRight: -8}}>
        <Icon name="caret-back-outline" color="#666666" size={20} />
      </View>
      <View style={[GlobalStyles.elevated_card, {width: '85%'}]}>
        <View style={{width: '100%', marginBottom: 10}}>
          <Text style={styles.dateText}>July 26, 2020</Text>
        </View>

        <View style={{width: '100%', marginBottom: 10}}>
          <Text style={styles.statusText}>Project Completed</Text>
        </View>

        <View style={{width: '100%', padding: 5}}>
          <Text style={styles.dateText}>
            Lorem Ipsum is simply dummy text of the of and typesetting industry.
            Lorem Ipsum has been the industry's dummy text. Lorem Ipsum is
            simply dummy text of the of and typesetting industry. Lorem Ipsum
            has been the industry's dummy text. Lorem Ipsum is simply dummy text
            of the of and typesetting industry. Lorem Ipsum has been the has
            been the indus try's dummy text.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.8,
  },
  dateText: {
    fontFamily: 'Montserrat',
    color: '#666666',
  },
  statusText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
});
