import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Routes } from '../utils/Routes';
import LoginScreen from '../screens/authScreens/LoginScreen';
import SignupScreen from '../screens/authScreens/SignupScreen';
import ForgotPasswordScreen from '../screens/authScreens/ForgotPasswordScreen';
import OtpVerificationScreen from '../screens/authScreens/OtpVerificationScreen';
import SplashScreen from '../screens/authScreens/SplashScreen';
import WelcomeScreen from '../screens/authScreens/WelcomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();
  return (
  
    <Stack.Navigator initialRouteName='SignupScreen' screenOptions={{headerShown: false}}>
    <Stack.Screen name={Routes.Splash_Screen} component={SplashScreen} />
      <Stack.Screen name={Routes.Login_Screen} component={LoginScreen} />
      <Stack.Screen name={Routes.Signup_Screen} component={SignupScreen} />
      <Stack.Screen name={Routes.Forgot_Password_Screen} component={ForgotPasswordScreen} />
      <Stack.Screen name={Routes.Otp_Verification_Screen} component={OtpVerificationScreen} />

      <Stack.Screen name={Routes.Welcome_Screen} component={WelcomeScreen} />
    </Stack.Navigator>
   

  )
}

export default AuthStack

const styles = StyleSheet.create({})