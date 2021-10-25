import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeadCard} from '../../../core/HeadCard';
import {MyText} from '../../../core/MyText';
import Icon from 'react-native-vector-icons/Ionicons';
import {SectionLine} from '../../../core/sectionLine';
import {HistoryEventCard} from './components/EventCard';

export const TrackProject = ({navigation}: any) => {
  return (
    <View style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
        <HeadCard style={{height: 181}}>
          <SafeAreaView style={[styles.header, {marginBottom: 0}]}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
                //borderWidth: 1,
              }}>
              <Icon name="arrow-back-outline" size={17} color="white" />
              <MyText
                style={{
                  color: 'white',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 17,
                }}>
                {' '}
                Go Back
              </MyText>
            </TouchableOpacity>
            <MyText style={styles.headerText}>Track Project</MyText>
          </SafeAreaView>
          <SectionLine />
        </HeadCard>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View style={{width: '90%'}}>
            <HistoryEventCard doubleTick active />
            <HistoryEventCard repeat active />
            <HistoryEventCard repeat />
            <HistoryEventCard complete />
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
  header: {
    alignItems: 'center',
    width: '90%',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
});
