import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../colors';
import {HeadCard} from '../../../core/HeadCard';
import {ImageScroller} from '../../../core/ImageScroller';
import {MyText} from '../../../core/MyText';
import {SectionLine} from '../../../core/sectionLine';
import {Comments} from './components/comments';
import {DonationsCard} from './components/DonationsCard';
import {FAQ} from './components/faq';
import {Story} from './components/Story';

interface ImageCard {
  source?: any;
  onPress?(): void;
}

const ImageCard = (props: ImageCard) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <ImageBackground
        borderRadius={10}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 175,
          borderRadius: 10,
        }}
        source={props.source}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 30,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="play-outline" color={'#E1E1E1'} size={12} />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export const ProjectDetails = ({navigation}: any) => {
  const [activeSection, setActiveSection] = useState('story');
  return (
    <View style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
        <HeadCard style={{height: 219}}>
          <SafeAreaView style={[styles.header, {marginBottom: 20}]}>
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
            <MyText style={styles.headerText}>
              Lorem Ipsum is dummy text of the industry.
            </MyText>
          </SafeAreaView>
          <SectionLine />
        </HeadCard>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View style={{width: '90%', marginTop: 20}}>
            <ImageCard source={require('../../../assets/farm.jpg')} />
          </View>
          <View style={{width: '90%', marginTop: 20}}>
            <ImageScroller />
          </View>
          <View style={{width: '90%', marginTop: 20}}>
            <DonationsCard />
          </View>
          <View
            style={{
              width: '90%',
              marginVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={[
                styles.sectionView,
                activeSection === 'story' && styles.sectionActiveView,
              ]}>
              <MyText
                onPress={() => setActiveSection('story')}
                style={styles.sectionText}>
                STORY
              </MyText>
            </View>
            <View
              style={[
                styles.sectionView,
                activeSection === 'faqs' && styles.sectionActiveView,
              ]}>
              <MyText
                onPress={() => setActiveSection('faqs')}
                style={styles.sectionText}>
                FAQs
              </MyText>
            </View>
            <View
              style={[
                styles.sectionView,
                activeSection === 'comments' && styles.sectionActiveView,
              ]}>
              <MyText
                onPress={() => setActiveSection('comments')}
                style={styles.sectionText}>
                Comments
              </MyText>
            </View>
          </View>

          {activeSection === 'story' && (
            <View style={{width: '90%'}}>
              <Story />
            </View>
          )}
          {activeSection === 'faqs' && (
            <View style={{width: '90%'}}>
              <FAQ />
            </View>
          )}
          {activeSection === 'comments' && (
            <View style={{width: '90%'}}>
              <Comments />
            </View>
          )}
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
  sectionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  sectionView: {
    height: 30,
    padding: 4,
    marginRight: 10,
  },
  sectionActiveView: {
    borderBottomWidth: 1,
    borderColor: COLORS.gradient_primary,
  },
});
