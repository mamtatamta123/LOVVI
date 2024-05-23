import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  responsiveWidth as wp,
  responsiveFontSize as fp,
} from 'react-native-responsive-dimensions';
import appColors from '../../utils/appColors';
import AppButton from '../../libComponents/AppButton';

const WelcomeScreen = () => {
  return (

<ImageBackground source={require('../../assets/Images/LovviBgImage.png')}
   style={{width: '100%', height: "100%", }}
   resizeMode='cover'


>
<StatusBar/>

<View style={{justifyContent:'center',alignItems:'center',  marginTop: wp(10),}}>

  <Text style={{color:appColors.White_color,fontSize:100, fontFamily: 'SourceSans3-Italic',fontWeight:'bold',fontStyle:'italic'}}>LOVVI</Text>
</View>

<View style={{marginTop:wp(60),justifyContent:'center',alignItems:'center',}}>
  <Text style={{color:appColors.Black_color,fontSize:fp(6),fontWeight:'bold'}}>Welcome Back</Text>
  <Text style={{color:appColors.Black_color,fontSize:fp(2.5),fontWeight:'500',opacity:0.7}}>Start with Sign Up or Sign In</Text>

</View>
<AppButton title={'Sign Up'}/>
<AppButton title={'Sign In'}/>

</ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})