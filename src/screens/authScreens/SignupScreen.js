import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import appColors from '../../utils/appColors';
import {
  responsiveWidth as wp,
  responsiveFontSize as fp,
} from 'react-native-responsive-dimensions';
import AppTextInputLabel from '../../libComponents/AppTextInputLabel';
import {Icon} from '../../components/AppIcon';
import LinearGradient from 'react-native-linear-gradient';

const SignupScreen = () => {
  return (
    <LinearGradient colors={appColors.PrimaryGradient} style={{flex: 1}}>
      <View style={{flex:3}}>
        <View
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              color: appColors.White_color,
              fontSize: 40,
              fontWeight: 'bold',
            }}>
            Lovvi
          </Text>
        </View>
        <View style={{marginHorizontal: 10}}>
          <Text
            style={{
              color: appColors.Black_color,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Sign Up using Phone Number
          </Text>
          <Text
            style={{
              color: appColors.Black_color,
              fontSize: 14,
              fontWeight: '500',
            }}>
            Hi there, sign up to get started
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 7,
          backgroundColor: appColors.White_color,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 2,
          
          
        }}>
      <AppTextInputLabel/>
      </View>
    
    </LinearGradient>


  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
