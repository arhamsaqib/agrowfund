import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HistoryMain} from './historyMain';
import {TrackProject} from './trackProject';

const Stack = createNativeStackNavigator();

export const HistoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="History Main" component={HistoryMain} />
      <Stack.Screen name="Track Project" component={TrackProject} />
    </Stack.Navigator>
  );
};
