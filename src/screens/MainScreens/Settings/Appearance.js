import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppView from '../../../libComponents/AppView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';
import appColors from '../../../utils/appColors';

const Appearance = () => {
  return (
    <AppView>
      <AppStatusBar isDark={false} isbg={false} />
      <AppHeader isBlack={true} isColor={true} />
      <View style={{marginHorizontal: 15}}>
        <AppText style={styles.title}>Appearance</AppText>
        <TouchableOpacity style={styles.contanier}>
          <Text style={styles.TextColor}>Use System Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contanier}>
          <Text style={styles.TextColor}>Light Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contanier}>
          <Text style={styles.TextColor}>Dark Mode</Text>
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
    color: appColors.BLACK,
    fontSize: 15,
    fontWeight: '400',
  },
});
