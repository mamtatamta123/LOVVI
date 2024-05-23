import { StyleSheet, Text, View,TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import appColors from '../utils/appColors'
import {
    responsiveWidth as wp,
    responsiveFontSize as fp,
  } from 'react-native-responsive-dimensions';

const AppButton = ({marginTop=wp(8),title}) => {

    const [isActive,setIsActive]=useState('false')

    const handlePress = () => {
        setIsActive(!isActive);

    };
  return (
    <TouchableOpacity
  
  onPress={handlePress}
    style={[
      {
      
        backgroundColor: appColors.White_color,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: marginTop,
          height:50,
      
        borderRadius:9,
     marginHorizontal:wp(3)


      
      },
    //   {...ContainerStyle},
    ]}>
      <Text
        style={[
          {color: 'black', fontSize: 18, fontWeight: '500',textAlign:'center'},
        
        ]}>
      {title}
      </Text>
  
  </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({})




