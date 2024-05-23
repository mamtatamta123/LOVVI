import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import AppColors from '../utils/appColors';
import appColors from '../utils/appColors';
const AppGradientView = () => {
  return (
    <LinearGradient colors={AppColors.PrimaryGradient} style={styles.linearGradient}>
    <Text style={styles.TextsTYLE}>
    LOVVI
    </Text>
  </LinearGradient>
  )
}

export default AppGradientView

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
 TextsTYLE: {
    fontSize: 50,
  fontFamily:'SourceSans3-Italic',
    color: appColors.White_color,

    fontWeight:'bold'
  },
})