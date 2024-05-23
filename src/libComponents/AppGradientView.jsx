import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppGradientView = ({children,style}) => {
  return (
  
      <LinearGradient
        colors={appColors.PrimaryGradient}
        start={start}
        end={end}
        style={[styles.gradientContainer, ...style,{height:height}]}>
        {children}
        {title}
      </LinearGradient>
  )
}

export default AppGradientView

const styles = StyleSheet.create({})