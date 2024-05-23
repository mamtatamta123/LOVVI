import { StyleSheet, Text, View, ViewProps,ViewStyle} from 'react-native'
import React from 'react'


const AppView = ({children,style,borderRadius}) => {
  return (
    <View style={[{flex:1,backgroundColor:'#fff',borderRadius:borderRadius},{style}]}>
    {children}
    </View>
  )
}

export default AppView
const styles = StyleSheet.create({})