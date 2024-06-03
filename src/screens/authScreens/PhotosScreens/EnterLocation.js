import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  StatusBar,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import AppView from '../../../libComponents/AppView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';

import AppButton from '../../../libComponents/AppButton';

import {PermissionsAndroid} from 'react-native';
import {routes} from '../../../utils/routes';
import LoginScreen from '../authVerificationScreens/LoginScreen';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import {prepareAutoBatched} from '@reduxjs/toolkit';
import appColors from '../../../utils/appColors';
import AppTextInputLabel from '../../../libComponents/AppTextInputLabel';

const EnterLocation = ({navigation}) => {
  const [streetLocation, setstreetLocation] = useState();

  return (
    <>
      <AppView
        style={{
          backgroundColor: appColors.white,
          flex: 1,
          paddingHorizontal: 15,
        }}>
        <AppStatusBar isDark={false} isbg={false} />
        <AppHeader isBlack={true} isColor={true} />
        <AppText style={styles.textContainer}>Enter Your Location?</AppText>

        <View style={styles.textInput}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AppIcon Type={Icon.EvilIcons} name={'search'} />
            <TextInput
              value={setstreetLocation}
              placeholder="Golden Street Lane 2"
              placeholderTextColor={appColors.DARK_GRAY}
              onChangeText={text => setstreetLocation(text)}
              IconType={Icon.FontAwesome5}
              Iconsize={20}
              Iconname={'phone-alt'}
              Iconcolor={appColors.IconColor}
              style={styles.input}
            />
          </View>
          <AppIcon Type={Icon.MaterialIcons} name={'cancel'} size={20}/>
        </View>
        <View style={styles.textInput}>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
            <AppIcon Type={Icon.MaterialCommunityIcons} name={'near-me'} size={18} color={appColors.primaryColor}/>
   <AppText style={{color:appColors.Black_color,fontSize:14,fontWeight:'600'}}>Use my current location</AppText>
          </TouchableOpacity>
        <View style={{borderBottomWidth:1,borderColor:appColors.BLACK}}></View>
        </View>
        <View style={styles.textInput}>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
            <AppIcon Type={Icon.MaterialCommunityIcons} name={'near-me'} size={18} color={appColors.primaryColor}/>
   <AppText style={{color:appColors.Black_color,fontSize:14,fontWeight:'600'}}>Golden Street Lane 2</AppText>
          </TouchableOpacity>
        
        </View>
        <AppButton title="next" style={{marginTop: 30}} onPress={()=>navigation.navigate(routes.Home)} />
      </AppView>
    </>
  );
};

export default EnterLocation;

const styles = StyleSheet.create({
  textContainer: {
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 20,
  },
  textInput: {
    // borderWidth: 1,
    borderRadius: 10,
    borderColor: appColors.TextInput_BgColor,
    // paddingHorizontal: 20,
    marginVertical: 10,
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:'center',
   paddingHorizontal:10
  },
});
