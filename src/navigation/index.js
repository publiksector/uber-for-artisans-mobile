import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/Splash';
import GetStartedScreen from '../screens/GetStarted';
import PhoneScreen from '../screens/Auth';
import LoginScreen from '../screens/Auth/Login';
import VerifyScreen from '../screens/Auth/Verify';
import NameScreen from '../screens/Auth/Name';
import PasswordScreen from '../screens/Auth/Password';
import AvatarScreen from '../screens/Auth/Avatar';
import OnBoardScreen1 from '../screens/Onboard';
import HomeScreen from '../screens/Home';
import ArtisanExploreScreen from '../screens/ArtisanExplore';
import ProfileScreen from '../screens/Account/Profile';
import ChatScreen from '../screens/Chat';
import AccountScreen from '../screens/UserAccount/Account';
import PersonalInfo from '../screens/UserAccount/PersonalInfo';
import PasswordReset from '../screens/Account/PasswordReset';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Phone"
          component={PhoneScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verify"
          component={VerifyScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Name"
          component={NameScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Password"
          component={PasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Avatar"
          component={AvatarScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoard1"
          component={OnBoardScreen1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ArtisanExplore"
          component={ArtisanExploreScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfo}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="PasswordReset"
          component={PasswordReset}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
