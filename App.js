import {Appearance, StatusBar} from 'react-native';
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

const App = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const dispatch = useDispatch();
  const isarkMode = useSelector(state => state.auth.isDarkMode);

  useEffect(() => {
    const listener = Appearance.addChangeListener(colorScheme => {
      console.log('colorScheme', colorScheme);
      if (colorScheme.colorScheme === 'dark') {
        console.log('in dark mode');
        dispatch(setIsDarkMode(true));
      } else {
        console.log('in light mode');
        dispatch(setIsDarkMode(false));
      }
    });

    return () => listener;
  }, []);

  return (
    <>
      <StatusBar
        barStyle={isarkMode ? '#22222' : 'red'}
        backgroundColor={'#2222'}
      />
      <NavigationContainer>
        {!loggedIn ? <MainStack /> : <AuthStack />}
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
