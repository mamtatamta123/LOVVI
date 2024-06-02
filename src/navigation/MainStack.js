import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../utils/routes';
import TermsAndConditions from '../screens/MainScreens/guidelines/TermsAndCondition';
import PrivacyPolicy from '../screens/MainScreens/guidelines/PrivacyPolicy';
import CookiePolicy from '../screens/MainScreens/guidelines/CommunityGuidelines';
import CommunityGuidelines from '../screens/MainScreens/guidelines/CommunityGuidelines';
import BottomNavigation from './BottomNavigation';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routes.BottomNavigation}>
      <Stack.Screen
        name={routes.BottomNavigation}
        component={BottomNavigation}
      />
      <Stack.Screen
        name={routes.Terms_And_Conditions}
        component={TermsAndConditions}
      />
      <Stack.Screen name={routes.Privacy_Policy} component={PrivacyPolicy} />
      <Stack.Screen name={routes.Cookie_Policy} component={CookiePolicy} />
      <Stack.Screen
        name={routes.Community_Guidelines}
        component={CommunityGuidelines}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
