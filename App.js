import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppGradientView from './src/libComponents/AppGradientView'
import WelcomeScreen from './src/screens/authScreens/WelcomeScreen'
import SignupScreen from './src/screens/authScreens/SignupScreen'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './src/navigation/AuthStack'

const App = () => {
  
  return (
    // <AppGradientView/>
    // <WelcomeScreen/>
    // <SignupScreen/>
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})