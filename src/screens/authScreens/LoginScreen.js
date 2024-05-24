

import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
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

const LoginScreen= () => {
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
        <Text style={styles.headerText}>LOVVI</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>Sign In with Phone Number</Text>
        <Text style={styles.subtitleText}>Enter your details to sign in</Text>
      </View>
      <View style={styles.formContainer}>
     
    

      

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



<AppButton title={'Sign in'} onPress={()=>navigation.navigate(Routes.Forgot_Password_Screen)}/>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;

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
    fontSize: 55,
    fontWeight: '800',
  },
  infoContainer: {
    marginHorizontal: wp(5),
   
  },
  titleText: {
    color: appColors.Black_color,
    fontSize: 27,
    fontWeight: 'bold',
  },
  subtitleText: {
    color: appColors.Black_color,
    fontSize: 15,
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
    marginTop:wp(6),
    marginHorizontal:wp(4)
   
  },
});
