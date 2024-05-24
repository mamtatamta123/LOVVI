

import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';
import React, { useState } from 'react';
import appColors from '../../utils/appColors';
import {
  responsiveWidth as wp,
  responsiveFontSize as fp,
} from 'react-native-responsive-dimensions';
import AppTextInputLabel from '../../libComponents/AppTextInputLabel';
import {Icon} from '../../components/AppIcon';
import LinearGradient from 'react-native-linear-gradient';
import AppButton from '../../libComponents/AppButton';
import { Routes } from '../../utils/Routes';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation =useNavigation()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <LinearGradient colors={appColors.PrimaryGradient} style={styles.container}>
      <View style={styles.headerContainer}>
          <Image source={require('../../assets/Images/mainHeading.png')}   style={{width: '50%', height: '45%'}}/>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>Sign Up Using Phone Number</Text>
        <Text style={styles.subtitleText}>Hi there, sign up to get started</Text>
      </View>
      <View style={styles.formContainer}>
     
    

      <AppTextInputLabel
                keyboardType={'email-address'}
                labelText="Full Name"
                value={name}
                placeholder="Enter Your Full Name"
                onChangeText={text => setName(text)}
                IconType={Icon.Ionicons}
              Iconsize={20}
              Iconname={'person-sharp'}
                Iconcolor={appColors.IconColor}
                style={styles.input}
              />

<AppTextInputLabel
                keyboardType={'email-address'}
                labelText="Phone Number"
                value={phoneNumber}
                placeholder="Enter Your Phone Number"
                onChangeText={text => setPhoneNumber(text)}
                IconType={Icon.FontAwesome5}
              Iconsize={20}
              Iconname={'phone-alt'}
                Iconcolor={appColors.IconColor}
                style={styles.input}
              />
              <AppTextInputLabel
                keyboardType={'email-address'}
                labelText="Password"
                value={password}
                placeholder="Enter Your Password"
                onChangeText={text => setPassword(text)}
                IconType={Icon.Fontisto}
              Iconsize={20}
              Iconname={'locked'}
                Iconcolor={appColors.IconColor}
                style={styles.input}
              />

<AppTextInputLabel
                keyboardType={'email-address'}
                labelText=" Confirm Password"
                value={confirmPassword}
                placeholder="Enter Your Password"
                onChangeText={text => setConfirmPassword(text)}
                IconType={Icon.Fontisto}
              Iconsize={20}
              Iconname={'locked'}
                Iconcolor={appColors.IconColor}
                style={styles.input}
              />

<AppButton title={'Sign up'}onPress={()=>navigation.navigate(Routes.Forgot_Password_Screen)} />
      </View>
    </LinearGradient>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: appColors.White_color,
    fontSize: 40,
    fontWeight: 'bold',
  },
  infoContainer: {
    marginHorizontal: wp(5),
    marginTop: wp(2),
  },
  titleText: {
    color: appColors.Black_color,
    fontSize: 24,
    fontWeight: 'bold',
    width:'70%'
  },
  subtitleText: {
    color: appColors.Black_color,
    fontSize: 16,
    fontWeight: '500',
    opacity: 0.6,
  },
  formContainer: {
    flex: 6,
    backgroundColor: appColors.White_color,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 2,
  
   
marginTop:20
  },
  input: {
    marginTop:20,
    marginHorizontal:20
  },
});
