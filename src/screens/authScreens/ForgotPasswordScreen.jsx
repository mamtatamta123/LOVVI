import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import appColors from '../../utils/appColors';
import {
  responsiveWidth as wp,
  responsiveFontSize as fp,
} from 'react-native-responsive-dimensions';
import AppTextInputLabel, {
  keyboardType,
} from '../../libComponents/AppTextInputLabel';
import AppButton from '../../libComponents/AppButton';
import {Icon} from '../../libComponents/AppIcon';
import AppGradientView from '../../libComponents/AppGradientView';
import AppStatusBar from '../../libComponents/AppStatusBar';
import AppHeader from '../../libComponents/AppHeader';
import AppView from '../../libComponents/AppView';
import AppText from '../../libComponents/AppText';
import {routes} from '../../utils/routes';

const ForgotPasswordScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <AppGradientView
      style={{height: '100%'}}
      colors={appColors.PrimaryGradient2}>
      <AppStatusBar />
      <AppHeader />
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>Forgot</Text>
          <Text style={styles.titleText}>Password</Text>
          <Text style={styles.subtitleText}>
            Enter the Phone Number associated with your account
          </Text>
        </View>

        <AppView style={styles.formContainer}>
          <AppTextInputLabel
            keyboardType={keyboardType.number_pad}
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
         

          <AppButton
            style={{marginBottom: '3%', marginTop: '15%'}}
            title={'Send OTP'}
            onPress={() => navigation.navigate(routes.Otp_Verification_Screen)}
          />
          <AppView style={{flexDirection:'row',justifyContent:'center'}}>
          <AppText style={{   fontSize:15}}>
          Back to 
          </AppText>
          <TouchableOpacity
                onPress={() => navigation.navigate(routes.Login_Screen)}>
              <AppText style={{color:appColors.primaryColor,textDecorationLine:'underline'}}> Sign in</AppText>
              </TouchableOpacity>
              </AppView>
        </AppView>
      </ScrollView>
    </AppGradientView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: appColors.white,
    fontSize: 40,
    fontWeight: 'bold',
  },
  infoContainer: {
    // marginHorizontal: wp(5),
    paddingHorizontal: 15,
    paddingVertical: '8%',
  },
  titleText: {
    color: appColors.Black_color,
    fontSize: 24,
    fontWeight: '900',
    width: '70%',
  },
  subtitleText: {
    color: appColors.Black_color,
    fontSize: 15,
    fontWeight: '500',
    opacity: 0.6,
    marginTop: 7,
    width:'75%'
  },
  formContainer: {
    backgroundColor: appColors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 2,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  input: {
    marginTop: 20,
    // marginHorizontal: 20,
  },
});
