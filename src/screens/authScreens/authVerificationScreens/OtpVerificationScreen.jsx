import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState} from 'react';

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
import {useDispatch, useSelector} from 'react-redux';
import {setIsDarkMode} from '../../../redux/auth.reducer';

const OtpVerificationScreen = ({navigation}) => {
  const isarkMode = useSelector(state => state.auth.isDarkMode);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 4;

  const handleOtpVerification = () => {
    navigation.navigate(routes.Email_Verification);
  };
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
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={[
              styles.codeFieldRoot,
              // {backgroundColor: isarkMode ? '#474747' : appColors.grayShade},
            ]}
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
                    color: isarkMode ? appColors.white : appColors.Black_color,
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
                value.length === 4 ? appColors.secondoryColor : appColors.white,
              borderWidth: value.length === 4 ? 0 : 1,
            }}
            title={'Verify'}
            onPress={handleOtpVerification}
          />
          <AppView style={{flexDirection: 'row', justifyContent: 'center'}}>
            <AppText style={{fontSize: 15}}>Didn't received code?</AppText>
            <TouchableOpacity
            // onPress={() => dispatch(setIsDarkMode(!isarkMode))}
            // onPress={() => navigation.navigate(routes.Email_Verification)}
            >
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
    width: '75%',
  },
  formContainer: {
    // backgroundColor: appColors.white,
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

  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: wp(16),
    height: wp(16),
    lineHeight: wp(15),
    fontSize: fp(4),
    // borderWidth: 2,
    // borderColor: appColors.TextInput_BgColor,
    textAlign: 'center',
    borderRadius: wp(4),
    // color: appColors.BLACK,
    // backgroundColor: appColors.TextInput_BgColor,
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
