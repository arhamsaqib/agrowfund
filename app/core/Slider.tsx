import React from 'react';
//@ts-ignore
import Slider from 'react-native-slider';
import {COLORS} from '../colors';

interface Props {
  value?: number;
  step?: number;
  minimumValue?: number;
  maximumValue?: number;
  onValueChange?(): void;
}

export const CustomSlider = (props: Props) => {
  return (
    <Slider
      disabled
      value={0.6}
      thumbTintColor={COLORS.primary_green}
      minimumTrackTintColor={COLORS.primary_green}
      trackStyle={{height: 10, borderRadius: 3}}
      maximumTrackTintColor={'#E1E1E1'}
      {...props}
    />
  );
};
