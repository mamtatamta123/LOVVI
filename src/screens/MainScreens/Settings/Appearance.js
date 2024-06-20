import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppView from '../../../libComponents/AppView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';
import appColors from '../../../utils/appColors';
import {useDispatch, useSelector} from 'react-redux';
import {setIsDarkMode} from '../../../redux/auth.reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIcon from '../../../libComponents/AppIcon';
import {Icon} from '../../../libComponents/AppIcon';

const Appearance = () => {
  const colorTheme = useColorScheme();
  const isarkMode = useSelector(state => state.auth.isDarkMode);
  const dispatch = useDispatch();
  const [theme, setTheme] = useState('appsystem');
  console.log('theme', theme);

  const handleTheme = async (theme, themeMode) => {
    await AsyncStorage.setItem('themeMode', themeMode);
    if (themeMode === 'appsystem') {
      dispatch(setIsDarkMode(colorTheme === 'dark'));
      await AsyncStorage.setItem('theme', colorTheme);
      setTheme(themeMode);
    } else {
      dispatch(setIsDarkMode(theme === 'dark'));
      await AsyncStorage.setItem('theme', theme);
      setTheme(themeMode);
    }
  };

  useEffect(() => {
    const getThemeMode = async () => {
      const themeMode = await AsyncStorage.getItem('themeMode');
      if (themeMode) {
        setTheme(themeMode);
      }
    };
    getThemeMode();
  }, []);
  return (
    <AppView>
      <AppStatusBar isDark={false} isbg={false} />
      <AppHeader isBlack={true} isColor={true} />
      <View style={{marginHorizontal: 15}}>
        <AppText style={styles.title}>Appearance</AppText>
        <TouchableOpacity
          style={styles.contanier}
          onPress={() => handleTheme('', 'appsystem')}>
          <Text
            style={[
              styles.TextColor,
              {color: isarkMode ? appColors.white : appColors.BLACK},
            ]}>
            Use System Settings
          </Text>
          {theme === 'appsystem' ? (
            <AppIcon
              Type={Icon.AntDesign}
              name={'check'}
              size={18}
              // color={appColors.white}
            />
          ) : (
            ''
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTheme('light', 'applight')}
          style={styles.contanier}>
          <Text
            style={[
              styles.TextColor,
              {color: isarkMode ? appColors.white : appColors.BLACK},
            ]}>
            Light Mode
          </Text>
          {theme === 'applight' ? (
            <AppIcon
              Type={Icon.AntDesign}
              name={'check'}
              size={18}
              // color={appColors.white}
            />
          ) : (
            ''
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTheme('dark', 'appdark')}
          style={styles.contanier}>
          <Text
            style={[
              styles.TextColor,
              {color: isarkMode ? appColors.white : appColors.BLACK},
            ]}>
            Dark Mode
          </Text>
          {theme === 'appdark' ? (
            <AppIcon
              Type={Icon.AntDesign}
              name={'check'}
              size={18}
              // color={appColors.white}
            />
          ) : (
            ''
          )}
        </TouchableOpacity>
        <Text style={{color: appColors.IconColor, fontSize: 13}}>
          Using the system settings will automatically adjust Lovvi appearance
          to match your device's system settings
        </Text>
      </View>
    </AppView>
  );
};

export default Appearance;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  contanier: {
    borderBottomWidth: 1,
    borderBottomColor: appColors.IconColor,
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TextColor: {
    fontSize: 15,
    fontWeight: '400',
  },
});
