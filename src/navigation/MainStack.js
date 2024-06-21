import {Platform, PermissionsAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import ManageSwipeSurge from '../screens/mainScreens/Settings/ManageSwipeSurge';
import ActiveScreen from '../screens/mainScreens/Settings/ActiveScreen';
import FriendsOfFriend from '../screens/mainScreens/Settings/FriendsOfFriend';
import ResendEmail from '../screens/mainScreens/Settings/ResendEmail';

import ChatScreen from '../screens/mainScreens/Chat/ChatScreen';
import EditProfile from '../screens/mainScreens/Profile/EditProfile';
import GalleryScreen from '../screens/mainScreens/Profile/GalleryScreen';
import messaging from '@react-native-firebase/messaging';
import {notificationListeners} from '../notification/notificationOndisplay';
import Block from '../screens/mainScreens/Settings/Block';
import NotificationScreen from '../screens/mainScreens/NotificationScreen';
import {isLocationEnabled} from 'react-native-android-location-enabler';
import {promptForEnableLocationIfNeeded} from 'react-native-android-location-enabler';
import GetLocation from 'react-native-get-location';
import {setUsedAddres} from '../redux/auth.reducer';
import {useDispatch} from 'react-redux';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = () => {
      getLocation();
      notificationListeners();
    };
    getUserData();
  }, []);

  async function handleEnabledPressed() {
    if (Platform.OS === 'android') {
      try {
        const enableResult = await promptForEnableLocationIfNeeded();
        console.log('enableResult', enableResult);
        if (enableResult === 'enabled') {
          return true;
        }
        // The user has accepted to enable the location services
        // data can be :
        //  - "already-enabled" if the location services has been already enabled
        //  - "enabled" if user has clicked on OK button in the popup
      } catch (error) {
        if (error) {
          console.error(error.message);
          if (error.message === 'ERR00') {
            return handleCheckPressed();
          }

          return false;
          // The user has not accepted to enable the location services or something went wrong during the process
          // "err" : { "code" : "ERR00|ERR01|ERR02|ERR03", "message" : "message"}
          // codes :
          //  - ERR00 : The user has clicked on Cancel button in the popup
          //  - ERR01 : If the Settings change are unavailable
          //  - ERR02 : If the popup has failed to open
          //  - ERR03 : Internal error
        }
      }
    }
  }

  async function handleCheckPressed() {
    if (Platform.OS === 'android') {
      const checkEnabled = await isLocationEnabled();
      if (checkEnabled) {
        return true;
      } else {
        return handleEnabledPressed();
      }
    }
  }

  const requestLocationPermission = async () => {
    try {
      const isEnabled = await handleCheckPressed();
      if (isEnabled) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        console.log('granted', granted);
        if (granted === 'granted') {
          console.log('granteddddddddddddddddd');
          return true;
        } else {
          return false;
        }
      }
    } catch (err) {
      return false;
    }
  };

  const getLocation = async () => {
    const request = await requestLocationPermission();
    if (request) {
      try {
        const location = await GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 60000,
          forceRequestLocation: true,
        });
        console.log('location', location);
        const reverseGeocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=AIzaSyAKfvrGBxXsxJ2AovOGAdltyorLy4ytT1I`;
        fetch(reverseGeocodingUrl)
          .then(response => response.json())
          .then(result => {
            console.log('hello', result?.results[0]?.formatted_address);
            dispatch(setUsedAddres(result?.results[0]?.formatted_address));
          })
          .catch(e => {
            console.log('error', e);
          });
      } catch (error) {
        console.log('Error in getLocation:', error);
        const {code, message} = error;
        console.log('UDAY', code, message);
        // if (code === 'UNAVAILABLE') {
        //   ErrorToast('Please Enable your mobile location');
        //   setLocationUpdate('UNAVAILABLE');
        // } else if (code === 'CANCELLED') {
        //   ErrorToast('Location is mandatory');
        // }
      }
    }
  };

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
      <Stack.Screen
        name={routes.Manage_Swipe_Surge}
        component={ManageSwipeSurge}
      />

      <Stack.Screen name={routes.Active_Screen} component={ActiveScreen} />
      <Stack.Screen
        name={routes.FriendsOf_Friend}
        component={FriendsOfFriend}
      />
      <Stack.Screen name={routes.Resend_Email} component={ResendEmail} />
      <Stack.Screen name={routes.Chat_Screen} component={ChatScreen} />
      <Stack.Screen name={routes.Edit_Profile} component={EditProfile} />
      <Stack.Screen name={routes.Gallery_Screen} component={GalleryScreen} />
      <Stack.Screen name={routes.Block} component={Block} />
      <Stack.Screen
        name={routes.NotificationScreen}
        component={NotificationScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
