import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProjectsMain} from './projectsMain';
import {ProjectDetails} from './projectDetails';
import {DonateNow} from './donateNow';

const Stack = createNativeStackNavigator();

export const ProjectsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Projects Main" component={ProjectsMain} />
      <Stack.Screen name="Project Details" component={ProjectDetails} />
      <Stack.Screen name="Donate Now" component={DonateNow} />
    </Stack.Navigator>
  );
};
