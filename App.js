import {Appearance, StatusBar, useColorScheme} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import {Provider, useSelector} from 'react-redux';
import MainStack from './src/navigation/MainStack';
import {store} from './src/app/store';
import {PermissionsAndroid, Platform} from 'react-native';
import Toast from 'react-native-toast-message';
import {setIsDarkMode} from './src/redux/auth.reducer';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const dispatch = useDispatch();
  const colorTheme = useColorScheme();
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const isarkMode = useSelector(state => state.auth.isDarkMode);

  //listener for darkmode who listen to mobile setting
  useEffect(() => {
    const listener = Appearance.addChangeListener(async colorScheme => {
      const themeMode = await AsyncStorage.getItem('themeMode');
      if (colorScheme.colorScheme === 'dark') {
        if (themeMode === null || themeMode === 'appsystem') {
          await AsyncStorage.setItem('theme', 'dark');
          dispatch(setIsDarkMode(true));
        }
      } else {
        if (themeMode === null || themeMode === 'appsystem') {
          await AsyncStorage.setItem('theme', 'light');
          dispatch(setIsDarkMode(false));
        }
      }
    });

    return () => listener;
  }, []);

  //for darkmode
  useEffect(() => {
    const getInfo = async () => {
      const theme = await AsyncStorage.getItem('theme');
      const themeMode = await AsyncStorage.getItem('themeMode');

      if (themeMode) {
        if (themeMode === 'applight' || themeMode === 'appdark') {
          await AsyncStorage.setItem('theme', theme);
          dispatch(setIsDarkMode(theme === 'dark'));
        } else {
          await AsyncStorage.setItem('theme', colorTheme);
          dispatch(setIsDarkMode(colorTheme === 'dark'));
        }
      } else {
        await AsyncStorage.setItem('theme', colorTheme);
        dispatch(setIsDarkMode(colorTheme === 'dark'));
      }
    };
    getInfo();
  }, []);

  return (
    <>
      <StatusBar
        barStyle={isarkMode ? '#22222' : 'red'}
        backgroundColor={'#2222'}
      />
      <NavigationContainer>
        {loggedIn ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </>
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
