import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import LoginScreen from '../screens/authScreens/LoginScreen';
import SignupScreen from '../screens/authScreens/SignupScreen';
import ForgotPasswordScreen from '../screens/authScreens/ForgotPasswordScreen';
import OtpVerificationScreen from '../screens/authScreens/OtpVerificationScreen';
import SplashScreen from '../screens/authScreens/SplashScreen';
import WelcomeScreen from '../screens/authScreens/WelcomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { routes } from '../utils/routes';
import PasswordScreen from '../screens/authScreens/PasswordScreen';
import getNumberScreen from '../screens/authScreens/GetNumberScreen';
import GetNumberScreen from '../screens/authScreens/GetNumberScreen';
import EmailVerification from '../screens/authScreens/EmailVerification';
import HouseRules from '../screens/authScreens/HouseRules';
import NameScreen from '../screens/authScreens/NameScreen';
import BirthdayScreen from '../screens/authScreens/DatePickrScreen';
import DatePickrScreen from '../screens/authScreens/DatePickrScreen';
import GenderScreen from '../screens/authScreens/GenderScreen';


const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={routes.Splash_Screen}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.Splash_Screen} component={SplashScreen} />
      <Stack.Screen name={routes.Login_Screen} component={LoginScreen} />
      <Stack.Screen name={routes.Signup_Screen} component={SignupScreen} />
      <Stack.Screen
        name={routes.Forgot_Password_Screen}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={routes.Otp_Verification_Screen}
        component={OtpVerificationScreen}
      />
      <Stack.Screen name={routes.Welcome_Screen} component={WelcomeScreen} />
      <Stack.Screen name={routes.Password_Screen} component={PasswordScreen} />
      <Stack.Screen name={routes.GetNumber_Screen} component={GetNumberScreen} />
      <Stack.Screen name={routes.Email_Verification} component={EmailVerification} />
      <Stack.Screen name={routes.House_Rules} component={HouseRules} />
      <Stack.Screen name={routes.Name_Screen} component={NameScreen} />
      <Stack.Screen name={routes.DatePickr_Screen} component={DatePickrScreen} />
      <Stack.Screen name={routes.Gender_Screen} component={GenderScreen} />

   
    </Stack.Navigator>
  );
};
export default AuthStack;
const styles = StyleSheet.create({});
