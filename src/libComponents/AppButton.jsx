import { StyleSheet, Text, View,TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import appColors from '../utils/appColors'
import {
    responsiveWidth as wp,
    responsiveFontSize as fp,
  } from 'react-native-responsive-dimensions';

const AppButton = ({marginTop=wp(5),title,onPress}) => {

    const [isActive,setIsActive]=useState('false')

   
  return (
    <TouchableOpacity
  
  onPress={onPress}
    style={[
      {
      
        backgroundColor: '#FECA06',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: marginTop,
          height:50,
      
        borderRadius:wp(3),
     marginHorizontal:wp(4)



      
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




