import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {routes} from '../utils/routes';
import RecentlyAdded from '../screens/mainScreens/RecentlyAdded/RecentlyAdded';
import MessagesSreen from '../screens/mainScreens/Chat/MessagesSreen';
import ProfileScreen from '../screens/mainScreens/Profile/ProfileScreen';
import Home from '../screens/mainScreens/Home/Home';
import LinearGradient from 'react-native-linear-gradient';
import AppIcon, { Icon } from '../libComponents/AppIcon';
import appColors from '../utils/appColors';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  const TabBarBackground = () => (
    <LinearGradient
      colors={['#242424', '#8A8A8A']}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}></LinearGradient>
  );
  return (

    // <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
    // <Tab.Screen name={routes.Home} component={Home} />


    //   <Tab.Screen name={routes.Recently_Added} component={RecentlyAdded} />
    //   <Tab.Screen name={routes.Messages_Sreen} component={MessagesSreen} />
    //   <Tab.Screen name={routes.Profile_Screen} component={ProfileScreen} />
    // </Tab.Navigator>


    <Tab.Navigator
 
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: appColors.primaryColor,
          height: 55,
        
        },
        tabBarActiveTintColor: appColors.primaryColor,
        tabBarInactiveTintColor: '#8A8A8A',
        tabBarLabel: () => null,
        tabBarHideOnKeyboard: true,
        tabBarBackground: () => <TabBarBackground />,
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <AppIcon  Type={Icon.Foundation}
              name="home" size={30} color={color} />
              
          ),
        }}
        name={routes.Home} component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
         
          tabBarIcon: ({color, size}) => (
            <AppIcon
            Type={Icon.AntDesign}
              name="heart"
              color={color}
              size={27}
            />
          ),
        }}
        name={routes.Recently_Added} component={RecentlyAdded} 
      />


      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <AppIcon
            Type={Icon.Entypo}
            name={'chat'}
              color={color}
              size={30}
            />
          ),
        }}
        name={routes.Messages_Sreen} component={MessagesSreen} 
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <AppIcon
            Type={Icon.Ionicons}
            name={'person-circle-outline'}
              color={color}
              size={32}
            />
          ),
        }}
        name={routes.Profile_Screen} component={ProfileScreen} 
      />
     
    </Tab.Navigator>
  );
};

export default BottomNavigation;
