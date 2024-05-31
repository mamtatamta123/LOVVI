import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
    StatusBar,
    Image,
    Alert,
    TextInput
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

    const [streetLocation,setstreetLocation]=useState()
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
          <AppText style={styles.textContainer}>
          Enter Your Location?
          </AppText>
        
<View style={styles.textInput}>
<View style={{flexDirection:'row'}}>
<Text>kkk</Text>
<Text>kkk</Text>
</View>
          <TextInput
        
            value={setstreetLocation}
            placeholder="Enter Your Phone Number"
            onChangeText={text => setstreetLocation(text)}
            IconType={Icon.FontAwesome5}
            Iconsize={20}
            Iconname={'phone-alt'}
            Iconcolor={appColors.IconColor}
            style={styles.input}
          />
          </View> 
          <AppButton  title='next' style={{marginTop:30}}/>
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
textInput:{
    borderWidth:1,
    borderRadius:10,
    borderColor:appColors.TextInput_BgColor,
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center'


}
   
  });
  