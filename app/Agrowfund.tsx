import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashGreen} from './screens/splash/splashGreen';
import {Onboarding1} from './screens/onboarding/onboarding1';
import {Onboarding2} from './screens/onboarding/onboarding2';
import {Onboarding3} from './screens/onboarding/onboarding3';

const Stack = createNativeStackNavigator();

export const Agrowfund = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashGreen} />
        <Stack.Screen name="Onboarding 1" component={Onboarding1} />
        <Stack.Screen name="Onboarding 2" component={Onboarding2} />
        <Stack.Screen name="Onboarding 3" component={Onboarding3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
