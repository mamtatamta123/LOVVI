import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppGradientView from './src/libComponents/AppGradientView'
import WelcomeScreen from './src/screens/authScreens/WelcomeScreen'
import SignupScreen from './src/screens/authScreens/SignupScreen'

const App = () => {
  return (
    // <AppGradientView/>
    // <WelcomeScreen/>
    <SignupScreen/>
  )
}

export default App

const styles = StyleSheet.create({})