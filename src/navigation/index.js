import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/Splash';
import OnboardScreen from '../screens/GetStarted';
import RegisterScreen from '../screens/Auth/Register';
import LoginScreen from '../screens/Auth/Login';
import VerifyScreen from '../screens/Auth/Verify';
import NameScreen from '../screens/Auth/Name';
import PasswordScreen from '../screens/Auth/Password';
import AvatarScreen from '../screens/Auth/Avatar';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboard">
        <Stack.Screen
          name="Onboard"
          component={OnboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verify"
          component={VerifyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Name"
          component={NameScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Password"
          component={PasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Avatar"
          component={AvatarScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;