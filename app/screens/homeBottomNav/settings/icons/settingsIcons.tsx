import React from 'react';
import {Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  img: {
    height: 23,
    width: 25,
    marginRight: 15,
  },
});

export const UserIcon = () => {
  return (
    <Image
      style={styles.img}
      source={require('../../../../assets/icons/user.png')}
    />
  );
};
export const WalletIcon = () => {
  return (
    <Image
      style={styles.img}
      source={require('../../../../assets/icons/wallet.png')}
    />
  );
};
export const HelpSupportIcon = () => {
  return (
    <Image
      style={styles.img}
      source={require('../../../../assets/icons/helpandsupport.png')}
    />
  );
};
export const WithdrawIcon = () => {
  return (
    <Image
      style={styles.img}
      source={require('../../../../assets/icons/withdraw.png')}
    />
  );
};
export const RequestProjectIcon = () => {
  return (
    <Image
      style={styles.img}
      source={require('../../../../assets/icons/requestforproject.png')}
    />
  );
};
export const RequestWithdrawIcon = () => {
  return (
    <Image
      style={styles.img}
      source={require('../../../../assets/icons/requestforwithdraw.png')}
    />
  );
};
export const AddBalanceIcon = () => {
  return (
    <Image
      style={styles.img}
      source={require('../../../../assets/icons/addnewbalance.png')}
    />
  );
};
export const FollowingIcon = () => {
  return (
    <Image
      style={styles.img}
      source={require('../../../../assets/icons/following.png')}
    />
  );
};
export const LogoutIcon = () => {
  return (
    <Image
      style={styles.img}
      source={require('../../../../assets/icons/logout.png')}
    />
  );
};
