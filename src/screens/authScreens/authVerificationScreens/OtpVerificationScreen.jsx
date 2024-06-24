import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  responsiveWidth as wp,
  responsiveFontSize as fp,
} from 'react-native-responsive-dimensions';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import AppButton from '../../../libComponents/AppButton';
import AppGradientView from '../../../libComponents/AppGradientView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppView from '../../../libComponents/AppView';
import AppText from '../../../libComponents/AppText';
import appColors from '../../../utils/appColors';
import {routes} from '../../../utils/routes';
import {useSelector} from 'react-redux';
import {otpVerifyApi} from '../../../Apis/AuthApis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../../libComponents/Loader';
import {resendOtpApi} from '../../../Apis/AuthApis';

const OtpVerificationScreen = ({navigation}) => {
  const isarkMode = useSelector(state => state.auth.isDarkMode);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(120);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 0) {
          clearInterval(interval);
        }
        return prevTimer > 0 ? prevTimer - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = async () => {
    // if (timer === 0) {
    //   const device_token = await AsyncStorage.getItem('deviceToken');
    //   const device_id = await AsyncStorage.getItem('deviceId');
    //   const phoneNumber = await AsyncStorage.getItem('phoneNumber');
    //   const countryCode = await AsyncStorage.getItem('countryCode');
    //   const data = {
    //     phone: phoneNumber,
    //     countryCode: countryCode,
    //     device_token: device_token,
    //     device_id: device_id,
    //   };
    //   await resendOtpApi(data,setTimer);
    // }
  };

  const handleOtpVerification = async () => {
    navigation.navigate(routes.Email_Verification);
    // const phone = await AsyncStorage.getItem('phoneNumber');
    // const data = {
    //   otp: value,
    //   phone: phone,
    // };
    // await otpVerifyApi(data, navigation, setLoading);
  };
  return (
    <>
      {loading ? <Loader /> : ''}
      <AppGradientView
        style={{height: '100%'}}
        colors={appColors.PrimaryGradient2}>
        <AppStatusBar />
        <AppHeader isBack={routes.Login_Screen} />
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.infoContainer}>
            <Text style={styles.titleText}>OTP</Text>
            <Text style={styles.titleText}>Verification</Text>
            <Text style={styles.subtitleText}>
              Enter the OTP code we just sent on your Phone Number.
            </Text>
          </View>

          <AppView style={styles.formContainer}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={[styles.codeFieldRoot]}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              autoComplete={Platform.select({
                android: 'sms-otp',
                default: 'one-time-code',
              })}
              testID="my-code-input"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[
                    styles.cell,

                    isFocused && styles.focusCell,
                    {
                      backgroundColor: isarkMode
                        ? '#474747'
                        : appColors.grayShade,
                      color: isarkMode
                        ? appColors.white
                        : appColors.Black_color,
                    },
                  ]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
            <AppButton
              disabled={value.length !== 4 ? true : false}
              style={{
                marginBottom: '10%',
                marginTop: '10%',
                backgroundColor:
                  value.length === 4
                    ? appColors.secondoryColor
                    : appColors.white,
                borderWidth: value.length === 4 ? 0 : 1,
              }}
              title={'Verify'}
              onPress={handleOtpVerification}
            />
            <AppText
              style={{
                alignSelf: 'center',
                marginBottom: 5,
                fontWeight: 'bold',
              }}>
              {timer} sec
            </AppText>
            <AppView style={{flexDirection: 'row', justifyContent: 'center'}}>
              <AppText style={{fontSize: 15}}>Didn't received code?</AppText>
              <TouchableOpacity onPress={handleResend}>
                <AppText
                  style={{
                    color: appColors.primaryColor,
                    textDecorationLine: 'underline',
                  }}>
                  {' '}
                  Resend
                </AppText>
              </TouchableOpacity>
            </AppView>
          </AppView>
        </ScrollView>
      </AppGradientView>
    </>
  );
};

export default OtpVerificationScreen;

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
    width: '75%',
  },
  formContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 2,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  input: {
    marginTop: 20,
  },

  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: wp(16),
    height: wp(16),
    lineHeight: wp(15),
    fontSize: fp(3),
    textAlign: 'center',
    borderRadius: wp(4),
  },
  focusCell: {
    borderColor: '#000',
  },
  resendText: {
    color: appColors.TextInput_BgColor,
    fontSize: fp(2),
    marginRight: wp(2),
  },
});
