import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack} from './home/homeStack';
import {ProjectsStack} from './projects/projectsStack';
import {HistoryStack} from './history/historyStack';
import {SettingsStack} from './settings/settingsStack';
import {COLORS} from '../../colors';
import Icon from 'react-native-vector-icons/Ionicons';
import FA from 'react-native-vector-icons/Fontisto';
import {StyleSheet, View} from 'react-native';

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
        tabBarStyle: {
          // padding: 5,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        },
      }}>
      <BTabs.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={styles.cont}>
              {focused && <View style={styles.activeDot} />}
              <Icon name="home-outline" color={color} size={25} />
            </View>
          ),
        }}
      />
      <BTabs.Screen
        name="Projects"
        component={ProjectsStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={styles.cont}>
              {focused && <View style={styles.activeDot} />}
              <Icon name="grid-outline" color={color} size={25} />
            </View>
          ),
        }}
      />
      <BTabs.Screen
        name="History"
        component={HistoryStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={styles.cont}>
              {focused && <View style={styles.activeDot} />}
              <FA name="history" color={color} size={25} />
            </View>
          ),
        }}
      />
      <BTabs.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={styles.cont}>
              {focused && <View style={styles.activeDot} />}
              <Icon name="settings-outline" color={color} size={25} />
            </View>
          ),
        }}
      />
    </BTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  activeDot: {
    //borderWidth: 1,
    width: 50,
    height: 3,
    borderWidth: 1,
    borderColor: COLORS.primary_green,
    backgroundColor: COLORS.primary_green,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    marginBottom: 3,
  },
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
