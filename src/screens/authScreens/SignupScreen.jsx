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
import {routes} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '../../libComponents/AppIcon';
import AppGradientView from '../../libComponents/AppGradientView';
import AppStatusBar from '../../libComponents/AppStatusBar';
import AppHeader from '../../libComponents/AppHeader';
import AppView from '../../libComponents/AppView';
import CheckBox from '@react-native-community/checkbox';
import AppText from '../../libComponents/AppText';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
          <Text style={styles.titleText}>Sign Up Using Phone Number</Text>
          <Text style={styles.subtitleText}>
            Hi there, sign up to get started
          </Text>
        </View>

        <AppView style={styles.formContainer}>
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
            // secureEntry={true}
            // secureTextEntry={showConfirmPassword}
            // onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          />

          <AppView style={{flexDirection: 'row', alignItems: 'center'}}>
            <AppView style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
                tintColors={{true: appColors.primaryColor}}
              />
              <AppText
                style={{
                  color: appColors.BLACK,
                  fontSize: 15,
                }}>
                Agree with
              </AppText>
            </AppView>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate(routes.Forgot_Password_Screen)
              }>
              <AppText
                style={{
                  color: appColors.primaryColor,
                  textDecorationLine: 'underline',
                  fontSize: 15,
                }}>
                Terms & Conditions
              </AppText>
            </TouchableOpacity>
          </AppView>

          <AppButton
            style={{marginTop: '10%'}}
            title={'Sign up'}
            // onPress={}
          />
          <AppView style={{marginTop: 10}}>
            <AppView
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: '10%',
              }}>
              <AppText style={{fontSize: 15}}>Already have an account?</AppText>
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.Login_Screen)}>
                <AppText style={{color: appColors.primaryColor}}>
                  {' '}
                  Sign in
                </AppText>
              </TouchableOpacity>
            </AppView>
          </AppView>
        </AppView>
      </ScrollView>
    </AppGradientView>
  );
};

export default SignupScreen;

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
