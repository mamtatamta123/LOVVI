import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppView from '../../../libComponents/AppView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';

const AutoPlayVideos = () => {
  return (
    <AppView>
      <AppStatusBar isDark={false} isbg={false} />
      <AppHeader isBlack={true} isColor={true} />
      <View style={{marginHorizontal: 15}}>
        <AppText style={styles.title}>Autoplay videos</AppText>
        <AppText
          style={{color: appColors.IconColor, fontSize: 13, marginTop: 10}}>
          Play videos uses more data than displaying photos, so choose when
          videos autoplay here.
        </AppText>
        <TouchableOpacity style={styles.contanier}>
          <Text style={styles.TextColor}>On Wi-fi and mobile data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contanier}>
          <Text style={styles.TextColor}>On Wi-fi only</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contanier}>
          <Text style={styles.TextColor}>Never autoplay videos</Text>
        </TouchableOpacity>
      </View>
    </AppView>
  );
};

export default AutoPlayVideos;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    // marginBottom: 20,
    marginTop: 20,
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
