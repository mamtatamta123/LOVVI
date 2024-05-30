import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../utils/routes';
import TermsAndCondition from '../screens/mainScreens/guidelines/TermsAndCondition';
import PrivacyPolicy from '../screens/mainScreens/guidelines/PrivacyPolicy';
import CookiePolicy from '../screens/mainScreens/guidelines/CookiePolicy';
import CommunityGuidelines from '../screens/mainScreens/guidelines/CommunityGuidelines';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}initialRouteName={routes.Privacy_Policy}>
      <Stack.Screen
        name={routes.TermsAnd_Condition}
        component={TermsAndCondition}
      />
       <Stack.Screen
        name={routes.Privacy_Policy}
        component={PrivacyPolicy}
      />
       <Stack.Screen
        name={routes.Cookie_Policy}
        component={CookiePolicy}
      />
       <Stack.Screen
        name={routes.Community_Guidelines}
        component={CommunityGuidelines}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
