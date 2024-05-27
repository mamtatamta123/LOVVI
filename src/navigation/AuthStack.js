import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {routes} from '../utils/routes';
import LoginScreen from '../screens/authScreens/LoginScreen';
import SignupScreen from '../screens/authScreens/SignupScreen';
import ForgotPasswordScreen from '../screens/authScreens/ForgotPasswordScreen';
import OtpVerificationScreen from '../screens/authScreens/OtpVerificationScreen';
import SplashScreen from '../screens/authScreens/SplashScreen';
import WelcomeScreen from '../screens/authScreens/WelcomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
    </Stack.Navigator>
  );
};
export default AuthStack;
const styles = StyleSheet.create({});
