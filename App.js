import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import {Provider, useSelector} from 'react-redux';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import {store} from './src/app/store';
import {PermissionsAndroid} from 'react-native';
import LocationScreen from './src/screens/authScreens/PhotosScreens/LocationScreen';
import ChatScreen from './src/screens/mainScreens/Chat/ChatScreen';

const App = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const isarkMode = useSelector(state => state.auth.isDarkMode);
  const appTheme = isarkMode ? DarkTheme : DefaultTheme;
  useEffect(() => {
    getPermission();
  }, []);

  const getPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const res = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        );
        console.log('res', res);
        if (res === 'granted') {
        } else {
          Linking.openSettings();
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  return (
    <NavigationContainer theme={appTheme}>
      {/* {loggedIn ? <MainStack /> : <AuthStack />} */}
      {/* <LocationScreen /> */}
      <ChatScreen />
    </NavigationContainer>
  );
};

const AppWapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
export default AppWapper;
