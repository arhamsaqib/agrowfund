import React from 'react';
import {StyleSheet, View} from 'react-native';
//@ts-ignore
import ToggleSwitch from 'toggle-switch-react-native';
import {COLORS} from '../colors';

interface Props {
  isOn?: boolean;
  onToggle?(val?: any): void;
}

export const CustomSwitch = (props: Props) => {
  return (
    <ToggleSwitch
      isOn={props.isOn}
      trackOnStyle={styles.switchTrack}
      trackOffStyle={styles.switchTrack}
      onColor="white"
      offColor={'white'}
      size="small"
      onToggle={props.onToggle}
      icon={
        <View
          style={{
            height: 15,
            width: 15,
            borderRadius: 15,
            backgroundColor: COLORS.gradient_secondary,
          }}></View>
      }
    />
  );
};

const styles = StyleSheet.create({
  switchTrack: {
    backgroundColor: '#F2F2F2',
  },
});
