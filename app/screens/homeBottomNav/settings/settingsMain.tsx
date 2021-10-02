import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {MyText} from '../../../core/MyText';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../colors';
import {
  FollowingIcon,
  HelpSupportIcon,
  LogoutIcon,
  RequestProjectIcon,
  RequestWithdrawIcon,
  UserIcon,
  WalletIcon,
  WithdrawIcon,
} from './icons/settingsIcons';

interface SOProps {
  onPress?(): void;
  iconName: string;
  name?: string;
  source: string;
  icon?: any;
}

const Option = (props: SOProps) => {
  const [pressed, setPressed] = useState(false);
  return (
    <TouchableOpacity
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={props.onPress}
      style={[
        styles.optionCard,
        pressed && {backgroundColor: COLORS.primary_green},
        !pressed && {backgroundColor: 'white'},
      ]}>
      {props.icon}
      {/* <Icon
        name={props.iconName}
        size={23}
        color={(pressed && 'white') || '#666666'}
        style={{marginRight: 15}}
      /> */}
      {/* <Image
        style={{height: 23, width: 23, marginRight: 23}}
        source={require('../../../assets/icons/' + props.source)}
      /> */}
      <MyText
        style={[
          styles.optionTxt,
          pressed && {color: 'white'},
          !pressed && {color: 'black'},
        ]}>
        {props.name ?? 'Option'}
      </MyText>
    </TouchableOpacity>
  );
};

export const SettingsMain = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.main}>
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
      <View style={{width: '90%', padding: 10, marginTop: 20}}>
        <Option
          name="Account"
          iconName="person-circle-outline"
          source="user.png"
          icon={<UserIcon />}
        />
        <Option
          name="Following"
          iconName="heart-outline"
          source="following.png"
          icon={<FollowingIcon />}
        />
        <Option
          name="Wallet"
          iconName="wallet-outline"
          source="wallet.png"
          icon={<WalletIcon />}
        />
        <Option
          name="Withdraw"
          iconName="cash-outline"
          source="withdraw.png"
          icon={<WithdrawIcon />}
        />
        <Option
          name="Request for withdraw"
          iconName="download-outline"
          source="requestforproject.png"
          icon={<RequestWithdrawIcon />}
        />
      </View>
      <View style={{marginTop: 50, width: '90%', padding: 10}}>
        <Option
          name="Request for project"
          iconName="git-pull-request-outline"
          source="requestforproject.png"
          icon={<RequestProjectIcon />}
        />
        <Option
          name="Help & support"
          iconName="help-outline"
          source="helpandsupport.png"
          icon={<HelpSupportIcon />}
        />
        <Option
          name="Log out"
          iconName="log-out-outline"
          source="logout.png"
          icon={<LogoutIcon />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headTxt: {
    fontSize: 15,
    color: '#222222',
  },
  profileCont: {
    flexDirection: 'row',
    alignItems: 'center',
    //borderWidth: 1,
    width: '90%',
    padding: 10,
    marginTop: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 27,
  },
  optionCard: {
    height: 40,
    // borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginVertical: 5,
  },
  optionTxt: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
});
