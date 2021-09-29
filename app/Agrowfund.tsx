import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashGreen} from './screens/splash/splashGreen';
import {Onboarding1} from './screens/onboarding/onboarding1';
import {Onboarding2} from './screens/onboarding/onboarding2';
import {Onboarding3} from './screens/onboarding/onboarding3';
import {Signin} from './screens/auth/signin';
import {Signup} from './screens/auth/signup';
import {BottomTabs} from './screens/homeBottomNav/BottomNav';

const Stack = createNativeStackNavigator();

export const Agrowfund = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashGreen} />
        <Stack.Screen name="Onboarding 1" component={Onboarding1} />
        <Stack.Screen name="Onboarding 2" component={Onboarding2} />
        <Stack.Screen name="Onboarding 3" component={Onboarding3} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Bottom Tabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
