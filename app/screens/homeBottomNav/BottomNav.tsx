import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack} from './home/homeStack';
import {ProjectsStack} from './projects/projectsStack';
import {HistoryStack} from './history/historyStack';
import {SettingsStack} from './settings/settingsStack';

const BTabs = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <BTabs.Navigator screenOptions={{headerShown: false}}>
      <BTabs.Screen name="Home" component={HomeStack} />
      <BTabs.Screen name="Projects" component={ProjectsStack} />
      <BTabs.Screen name="History" component={HistoryStack} />
      <BTabs.Screen name="Settings" component={SettingsStack} />
    </BTabs.Navigator>
  );
};
