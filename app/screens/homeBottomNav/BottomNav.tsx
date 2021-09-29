import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack} from './home/homeStack';
import {ProjectsStack} from './projects/projectsStack';
import {HistoryStack} from './history/historyStack';
import {SettingsStack} from './settings/settingsStack';
import {COLORS} from '../../colors';
import Icon from 'react-native-vector-icons/Ionicons';
import FA from 'react-native-vector-icons/Fontisto';

const BTabs = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <BTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary_green,
        tabBarInactiveTintColor: '#666666',
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Medium',
          fontSize: 12,
        },
      }}>
      <BTabs.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home-outline" color={color} size={25} />
          ),
        }}
      />
      <BTabs.Screen
        name="Projects"
        component={ProjectsStack}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="grid-outline" color={color} size={25} />
          ),
        }}
      />
      <BTabs.Screen
        name="History"
        component={HistoryStack}
        options={{
          tabBarIcon: ({color}) => (
            <FA name="history" color={color} size={25} />
          ),
        }}
      />
      <BTabs.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="settings-outline" color={color} size={25} />
          ),
        }}
      />
    </BTabs.Navigator>
  );
};
