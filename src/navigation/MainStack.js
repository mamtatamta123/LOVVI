import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../utils/routes';

import BottomNavigation from './BottomNavigation';
import TermsAndConditions from '../screens/mainScreens/guidelines/TermsAndCondition';

import PrivacyPolicy from '../screens/mainScreens/guidelines/PrivacyPolicy';
import CookiePolicy from '../screens/mainScreens/guidelines/CookiePolicy';
import CommunityGuidelines from '../screens/mainScreens/guidelines/CommunityGuidelines';
import Home from '../screens/mainScreens/Home/Home';
import {Settings} from 'react-native';
import SettingsScreen from '../screens/mainScreens/Settings/SettingsScreen';
import AllSettings from '../screens/mainScreens/Settings/AllSettings';
import Appearance from '../screens/mainScreens/Settings/Appearance';
import AutoPlayVideos from '../screens/mainScreens/Settings/AutoPlayVideos';
import UserName from '../screens/mainScreens/Settings/UserName';
import QandAEvants from '../screens/mainScreens/Settings/QandAEvants';
import ManageDirectMsg from '../screens/mainScreens/Settings/ManageDirectMsg';

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
      <Stack.Screen name={routes.Home} component={Home} />
      <Stack.Screen name={routes.Settings_Screen} component={SettingsScreen} />
      <Stack.Screen name={routes.All_Settings} component={AllSettings} />
      <Stack.Screen name={routes.Appearance} component={Appearance} />
      <Stack.Screen name={routes.AutoPlayVideos} component={AutoPlayVideos} />
      <Stack.Screen name={routes.UserName} component={UserName} />
      <Stack.Screen name={routes.QandA_Evants} component={QandAEvants} />
      <Stack.Screen
        name={routes.Manage_DirectMsg}
        component={ManageDirectMsg}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
