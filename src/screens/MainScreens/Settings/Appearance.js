import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppView from '../../../libComponents/AppView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';
import appColors from '../../../utils/appColors';
import {useDispatch, useSelector} from 'react-redux';
import {setIsDarkMode} from '../../../redux/auth.reducer';

const Appearance = () => {
  const isarkMode = useSelector(state => state.auth.isDarkMode);
  const dispatch = useDispatch();
  return (
    <AppView>
      <AppStatusBar isDark={false} isbg={false} />
      <AppHeader isBlack={true} isColor={true} />
      <View style={{marginHorizontal: 15}}>
        <AppText style={styles.title}>Appearance</AppText>
        <TouchableOpacity style={styles.contanier}>
          <Text
            style={[
              styles.TextColor,
              {color: isarkMode ? appColors.white : appColors.BLACK},
            ]}>
            Use System Settings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(setIsDarkMode(false))}
          style={styles.contanier}>
          <Text
            style={[
              styles.TextColor,
              {color: isarkMode ? appColors.white : appColors.BLACK},
            ]}>
            Light Mode
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(setIsDarkMode(true))}
          style={styles.contanier}>
          <Text
            style={[
              styles.TextColor,
              {color: isarkMode ? appColors.white : appColors.BLACK},
            ]}>
            Dark Mode
          </Text>
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
  },
  TextColor: {
    fontSize: 15,
    fontWeight: '400',
  },
});
