import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView, Image} from 'react-native';
import {HeadCard} from '../../../core/HeadCard';
import {MyText} from '../../../core/MyText';
import {ProjectCard} from '../../../core/ProjectCard';
import Icon from 'react-native-vector-icons/Ionicons';
import {BalanceCard} from '../../../core/BalanceCard';
//@ts-ignore
import {SliderBox} from 'react-native-image-slider-box';
import {COLORS} from '../../../colors';
import {ButtonStandard} from '../../../core/Button';
import {useState} from 'react';
import {SideModal} from '../../../core/SideModal';
import {Notifications} from './notifications';

export const HomeMain = ({navigation}: any) => {
  const [notificationModal, setNotificationModal] = useState(false);

  function onNotifPress() {
    //navigation.navigate('Notifications');
    setNotificationModal(true);
  }
  const images = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree', // Network image
  ];
  return (
    <View style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
        <HeadCard style={{height: 278}}>
          <SafeAreaView style={styles.headProf}>
            <View style={styles.profileCont}>
              <Image
                source={require('../../../assets/arham.jpeg')}
                style={{height: 63, width: 63, borderRadius: 63}}
              />
              <View style={{marginLeft: 10, alignItems: 'flex-start'}}>
                <MyText style={[styles.headTxt]}>Good Morning,</MyText>
                <MyText style={[styles.headTxt, styles.name]}>Arham S.</MyText>
              </View>
            </View>

            <View style={[{transform: [{rotate: '315deg'}]}]}>
              <Icon
                name="notifications-outline"
                size={27}
                color="white"
                onPress={onNotifPress}
                style={{borderRadius: 27}}
              />
            </View>
          </SafeAreaView>
        </HeadCard>
        <SideModal
          onCancelPress={() => setNotificationModal(false)}
          modalVisibility={notificationModal}>
          <Notifications />
        </SideModal>
        <ScrollView
          style={{
            marginTop: -100,
            width: '99%',
            alignSelf: 'center',
            minHeight: 160,
            maxHeight: 200,
          }}
          horizontal>
          <BalanceCard />
          <BalanceCard />
          <BalanceCard />
        </ScrollView>

        <View style={{alignSelf: 'center', height: 130, marginTop: 20}}>
          <SliderBox
            images={images}
            ImageComponentStyle={{width: '80%', height: 95, borderRadius: 5}}
            dotStyle={{height: 7, width: 7, borderRadius: 7}}
            dotColor={COLORS.primary_green}
            inactiveDotColor="#E1E1E1"
            imageLoadingColor={COLORS.primary_green}
          />
        </View>

        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            height: '100%',
            alignItems: 'center',
          }}>
          <View style={{width: '90%', marginVertical: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <MyText style={{fontFamily: 'Poppins-SemiBold', fontSize: 25}}>
                Projects
              </MyText>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F2F2F2',
                    borderRadius: 5,
                    marginRight: 10,
                  }}>
                  <Icon name="grid" color={COLORS.grey} size={28} />
                </View>
                <View
                  style={{
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#e5fbf6',
                    borderRadius: 5,
                  }}>
                  <Icon
                    name="reorder-three-sharp"
                    color={COLORS.primary_green}
                    size={25}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width: '90%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginVertical: 10,
              }}>
              <View style={{width: '30%', marginRight: 5}}>
                <ButtonStandard title="Ongoing" style={{height: 32}} />
              </View>
              <View style={{width: '40%', marginRight: 5}}>
                <ButtonStandard title="Coming soon" grey style={{height: 32}} />
              </View>
              <View style={{width: '30%', marginRight: 5}}>
                <ButtonStandard title="Soon" grey style={{height: 32}} />
              </View>
            </View>
            <ProjectCard separator />
            <ProjectCard separator />
            <ProjectCard />
          </View>
          <View style={{width: '50%', marginBottom: 30}}>
            <ButtonStandard
              title="View All Projects"
              style={{height: 36}}
              textStyle={{fontSize: 15}}
            />
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
    backgroundColor: '#FAFAFA',
  },
  headProf: {
    // borderWidth: 1,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headTxt: {
    fontSize: 15,
    color: 'white',
  },
  profileCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 27,
  },
});
