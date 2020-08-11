import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import BottomTabNavigation from './BottomTabNavigation';
import config from '../config';
import { Splash } from '../screens';

const RootStack = createStackNavigator();

const RootNavigation = () => (
  <RootStack.Navigator
    screenOptions={() => {
      return {
        headerTintColor: config.colors.appTheme,
        headerTitleStyle: {
          color: config.colors.black,
        },
        headerBackTitle: 'Back',
      };
    }}>
    <RootStack.Screen
      name={config.routes.AUTH_NAVIGATION}
      component={AuthNavigation}
      options={{ headerShown: false }}
    />
    <RootStack.Screen
      name={config.routes.BOTTOM_TAB_NAVIGATION}
      component={BottomTabNavigation}
      options={({ route }) => {
        return {
          headerTitle: getFocusedRouteNameFromRoute(route)
            ? getFocusedRouteNameFromRoute(route)
            : 'Dashboard',
        };
      }}
    />
  </RootStack.Navigator>
);

export default RootNavigation;
