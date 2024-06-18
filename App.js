import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import {Provider, useSelector} from 'react-redux';
import MainStack from './src/navigation/MainStack';
import {store} from './src/app/store';
import {PermissionsAndroid, Platform} from 'react-native';
import Toast from 'react-native-toast-message';

const App = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn);

  // useEffect(() => {
  //   getPermission();
  // }, []);

  // const getPermission = async () => {
  //   if (Platform.OS === 'android') {
  //     try {
  //       const res = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
  //       );
  //       console.log('res', res);
  //       if (res === 'granted') {
  //       } else {
  //         Linking.openSettings();
  //       }
  //     } catch (err) {
  //       console.warn(err);
  //     }
  //   }
  // };

  return (
    <NavigationContainer>
      {!loggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const AppWapper = () => {
  return (
    <Provider store={store}>
      <App />
      <Toast />
    </Provider>
  );
};
export default AppWapper;
