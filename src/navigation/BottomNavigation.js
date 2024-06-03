import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {routes} from '../utils/routes';
import RecentlyAdded from '../screens/mainScreens/RecentlyAdded/RecentlyAdded';
import MessagesSreen from '../screens/mainScreens/Chat/MessagesSreen';
import ProfileScreen from '../screens/mainScreens/Profile/ProfileScreen';




const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
     {/* <Tab.Screen name={routes.Home} component={Home} /> */}
      <Tab.Screen name={routes.Recently_Added} component={RecentlyAdded} />
      <Tab.Screen name={routes.Messages_Sreen} component={MessagesSreen} />
      <Tab.Screen name={routes.Profile_Screen} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
