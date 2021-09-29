import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProjectsMain} from './projectsMain';

const Stack = createNativeStackNavigator();

export const ProjectsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Projects Main" component={ProjectsMain} />
    </Stack.Navigator>
  );
};
