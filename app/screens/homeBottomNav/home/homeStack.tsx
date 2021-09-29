import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeMain} from './homeMain';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home Main" component={HomeMain} />
    </Stack.Navigator>
  );
};
