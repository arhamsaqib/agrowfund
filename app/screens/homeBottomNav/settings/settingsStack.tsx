import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SettingsMain} from './settingsMain';

const Stack = createNativeStackNavigator();

export const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Settings Main" component={SettingsMain} />
    </Stack.Navigator>
  );
};
