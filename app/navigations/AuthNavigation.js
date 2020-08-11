import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import config from '../config';
import { Login } from '../screens';

const Stack = createStackNavigator();

const AuthNavigation = () => (
  <Stack.Navigator
    screenOptions={() => {
      return {
        headerTintColor: config.colors.appTheme,
        headerTitleStyle: {
          color: config.colors.black,
        },
        headerBackTitle: 'Back',
      };
    }}>
    <Stack.Screen name={config.routes.LOGIN} component={Login} options={{ title: 'Login' }} />
  </Stack.Navigator>
);

export default AuthNavigation;
