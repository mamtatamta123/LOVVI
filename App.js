import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import {Provider, useSelector} from 'react-redux';
import {DefaultTheme, DarkTheme, useTheme} from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import {store} from './src/app/store';


const App = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const isarkMode = useSelector(state => state.auth.isDarkMode);
  const appTheme = isarkMode ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={appTheme}>
      {loggedIn ? <MainStack /> : <AuthStack />}
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

// use-------------------------
// import colors from useTheme  in any screeen where to use----
// const {colors} = useTheme(); like this-----
// <Text style={{color: colors.text}}></Text> ------it will give to you like colors.text
// colors.background
// use-------------------------
