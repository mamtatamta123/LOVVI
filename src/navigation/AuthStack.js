import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SplashScreen from '../screens/authScreens/authVerificationScreens/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../utils/routes';
import EmailVerification from '../screens/authScreens/authVerificationScreens/EmailVerification';
import GenderScreen from '../screens/authScreens/authOtherScreens/GenderScreen';
import LoginScreen from '../screens/authScreens/authVerificationScreens/LoginScreen';
import OtpVerificationScreen from '../screens/authScreens/authVerificationScreens/OtpVerificationScreen';
import WelcomeScreen from '../screens/authScreens/authVerificationScreens/WelcomeScreen';
import DatePickrScreen from '../screens/authScreens/authOtherScreens/DatePickrScreen';
import NameScreen from '../screens/authScreens/authOtherScreens/NameScreen';
import HouseRules from '../screens/authScreens/authOtherScreens/HouseRules';
import IdentityGender from '../screens/authScreens/authOtherScreens/IdentityGender';
import InterestedGender from '../screens/authScreens/authOtherScreens/InterestedGender';
import CardScreen from '../screens/authScreens/authOtherScreens/CardScreen';
import DistanceRangeScreen from '../screens/authScreens/authOtherScreens/DistanceRangeScreen';
import SchoolScreen from '../screens/authScreens/authOtherScreens/SchoolScreen';
import SelectInterest from '../screens/authScreens/authOtherScreens/SelectInterest';
import UploadPhotos from '../screens/authScreens/PhotosScreens/UploadPhotos';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={routes.Splash_Screen}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.Splash_Screen} component={SplashScreen} />
      <Stack.Screen name={routes.Login_Screen} component={LoginScreen} />

      <Stack.Screen
        name={routes.Email_Verification}
        component={EmailVerification}
      />
      <Stack.Screen
        name={routes.Otp_Verification_Screen}
        component={OtpVerificationScreen}
      />
      <Stack.Screen name={routes.Welcome_Screen} component={WelcomeScreen} />

      <Stack.Screen
        name={routes.DatePickr_Screen}
        component={DatePickrScreen}
      />
      <Stack.Screen name={routes.Gender_Screen} component={GenderScreen} />
      <Stack.Screen name={routes.House_Rules} component={HouseRules} />
      <Stack.Screen name={routes.Name_Screen} component={NameScreen} />
      <Stack.Screen name={routes.Identity_Gender} component={IdentityGender} />
      <Stack.Screen
        name={routes.Interested_Gender}
        component={InterestedGender}
      />
      <Stack.Screen name={routes.Card_Screen} component={CardScreen} />
      <Stack.Screen
        name={routes.Distance_Range_Screen}
        component={DistanceRangeScreen}
      />
      <Stack.Screen name={routes.School_Screen} component={SchoolScreen} />
      <Stack.Screen name={routes.Select_Interest} component={SelectInterest} />
      <Stack.Screen name={routes.Upload_Photos} component={UploadPhotos} />
    </Stack.Navigator>
  );
};
export default AuthStack;
const styles = StyleSheet.create({});
