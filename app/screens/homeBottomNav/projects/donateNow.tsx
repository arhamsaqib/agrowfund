import React, {useCallback, useMemo, useRef} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {MyText, TextMontserrat} from '../../../core/MyText';
import Icon from 'react-native-vector-icons/Ionicons';
import {GlobalStyles} from '../../../styles/GlobalStyles';
import {Separator} from './components/Separator';
import {TextInputStandard} from '../../../core/Textinput';
import {COLORS} from '../../../colors';
import {ButtonStandard} from '../../../core/Button';
import RBSheet from 'react-native-raw-bottom-sheet';
import {CheckBox} from '../../auth/components/checkbox';

const EnterAmount = () => {
  return (
    <View style={styles.amountCont}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '10%',
          marginVertical: 2,
        }}>
        <MyText style={styles.dollar}>$</MyText>
        <MyText style={{fontSize: 15}}>USD</MyText>
      </View>
      <View style={{width: '85%'}}>
        <TextInputStandard
          keyboardType="number-pad"
          defaultValue=".00"
          style={{
            borderWidth: 0,
            fontFamily: 'Poppins-SemiBold',
            fontSize: 40,
            textAlign: 'right',
          }}
        />
      </View>
    </View>
  );
};

export const DonateNow = ({navigation}: any) => {
  const img = require('../../../assets/projectThumb.jpeg');
  const refRBSheet: any = useRef();

  return (
    <SafeAreaView style={styles.main}>
      <View style={{width: '90%', marginVertical: 10}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            //borderWidth: 1,
          }}>
          <Icon name="arrow-back-outline" size={17} color="black" />
          <MyText
            style={{
              color: 'black',
              fontFamily: 'Poppins-Medium',
              fontSize: 17,
            }}>
            {' '}
            Go Back
          </MyText>
        </TouchableOpacity>
      </View>
      <ScrollView style={{width: '100%'}}>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View style={[GlobalStyles.elevated_card, {width: '90%'}]}>
            <View style={styles.cardHead}>
              <Image
                source={img}
                style={{height: 90, width: '30%'}}
                borderRadius={5}
              />
              <View style={{width: '65%'}}>
                <MyText style={styles.titleTxt}>
                  This is going to be the project title
                </MyText>
                <TextMontserrat style={{fontSize: 14, marginTop: 5}}>
                  Your donation will benefit to us
                </TextMontserrat>
              </View>
            </View>
            <Separator />
            <MyText style={styles.titleTxt}>Personal Details</MyText>
            <View style={{marginVertical: 5, marginTop: 10}}>
              <MyText style={styles.sectionTitle}>Name</MyText>
              <TextInputStandard placeholder="First Name" />
              <TextInputStandard placeholder="Last Name" />
            </View>
            <View style={{marginVertical: 5}}>
              <MyText style={styles.sectionTitle}>Email</MyText>
              <TextInputStandard placeholder="Enter your email" />
            </View>
            <View style={{marginVertical: 5}}>
              <MyText style={styles.sectionTitle}>Phone</MyText>
              <TextInputStandard placeholder="Phone Number" />
            </View>
            <Separator />
            <View style={{marginVertical: 5}}>
              <MyText style={styles.titleTxt}>Enter your amount</MyText>
              <EnterAmount />
            </View>
            <Separator />
            <View style={{marginVertical: 5}}>
              <MyText style={styles.titleTxt}>Your comment</MyText>
              <TextInputStandard
                style={{
                  height: 135,
                }}
                placeholder="Write your comment"
              />
            </View>
          </View>
          <View style={[{width: '90%'}, GlobalStyles.elevated_card]}>
            <MyText style={styles.titleTxt}>Other Information</MyText>
            <View style={styles.otherCont}>
              <CheckBox />
              <TextMontserrat> Don't display </TextMontserrat>
              <TextMontserrat style={{fontFamily: 'Montserrat-SemiBold'}}>
                my name{' '}
              </TextMontserrat>
              <TextMontserrat>on the project</TextMontserrat>
            </View>
            <View
              style={[
                styles.otherCont,
                {
                  width: '90%',
                },
              ]}>
              <CheckBox />
              <View style={{alignItems: 'center'}}>
                <TextMontserrat>
                  {' '}
                  I have read and agree to the website{' '}
                </TextMontserrat>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    //borderWidth: 1,
                    width: '100%',
                    marginLeft: 10,
                  }}>
                  <TextMontserrat
                    onPress={() => {}}
                    style={{fontFamily: 'Montserrat-SemiBold'}}>
                    terms{' '}
                  </TextMontserrat>
                  <TextMontserrat>and </TextMontserrat>
                  <TextMontserrat
                    onPress={() => {}}
                    style={{fontFamily: 'Montserrat-SemiBold'}}>
                    privacy policy
                  </TextMontserrat>
                </View>
              </View>
            </View>
            <View style={{width: '30%', marginTop: 10}}>
              <ButtonStandard
                title="Next"
                onPress={() => refRBSheet.current.open()}
              />
              <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                height={600}
                customStyles={{
                  wrapper: {
                    backgroundColor: '#999998',
                  },
                  draggableIcon: {
                    backgroundColor: '#000',
                  },
                }}>
                <View style={{width: '90%', alignSelf: 'center'}}>
                  <MyText style={{fontFamily: 'Poppins-Medium', fontSize: 22}}>
                    Privacy Policy
                  </MyText>
                  <TextMontserrat style={{color: '#666666'}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text. Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text.
                  </TextMontserrat>
                  <MyText style={{fontFamily: 'Poppins-Medium', fontSize: 22}}>
                    Lorem Ipsum is simply dummy text
                  </MyText>
                  <TextMontserrat style={{color: '#666666'}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text. Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text.
                  </TextMontserrat>
                  <View style={{width: '50%', marginTop: 10}}>
                    <ButtonStandard
                      style={{height: 36}}
                      title="Confirm Donate"
                      onPress={() => refRBSheet.current.open()}
                    />
                  </View>
                </View>
              </RBSheet>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  cardHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleTxt: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  sectionTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    color: '#444444',
  },
  amountCont: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#B0B0B0',
    height: 60,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dollar: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
  },
  otherCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
