import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import config from '../config';
import { Dashboard, Settings } from '../screens';
import ExTabIcon from '../components/ExTabIcon';

const Tab = createBottomTabNavigator();
/**
 * This is BottomTabNavigation contains the screens which are in Tab
 */
const BottomTabNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: config.colors.appTheme,
      inactiveTintColor: config.colors.notAvailable,
      labelStyle: {
        fontSize: 13,
        marginBottom: 5,
      },
      style: {
        backgroundColor: config.colors.white,
      },
    }}>
    <Tab.Screen
      name={config.routes.DASHBOARD}
      component={Dashboard}
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ color }) => {
          const iconStyle = { color };
          return <ExTabIcon iconStyle={iconStyle} iconName="home" />;
        },
      }}
    />
    <Tab.Screen
      name={config.routes.SETTINGS}
      component={Settings}
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color }) => {
          const iconStyle = { color };
          return <ExTabIcon iconStyle={iconStyle} iconName="settings" />;
        },
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigation;
