import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import OtpVerificationScreen from './OtpVerificationScreen'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const ForgotPasswordScreen = () => {
  const Foods = [
    { id: "1", uri: require('../../assets/Images/mainHeading.png') },
    // { id: "2", uri: require('./assets/2.jpg') },
    // { id: "3", uri: require('./assets/3.jpg') },
    // { id: "4", uri: require('./assets/4.jpg') },
    // { id: "5", uri: require('./assets/5.jpg') },
  ]
  return (
    <View style={{ flex: 1 }}>
    <View style={{ height: 60 }}>
    </View>
    <View style={{ flex: 1 }}>
      {this.renderUsers()}
    </View>
    <View style={{ height: 60 }}>
    </View>
  </View>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({})







// 1.create login screen according to figma
// 2.create signup screen according to figma
// 3.create forgot password screen according to figma
// 4.create Otp Verificatio nScreen screen according to figma