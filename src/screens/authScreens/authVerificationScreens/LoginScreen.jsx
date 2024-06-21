import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import appColors from '../../../utils/appColors';
import {
  responsiveWidth as wp,
  responsiveFontSize as fp,
  responsiveHeight as hp,
} from 'react-native-responsive-dimensions';

import AppButton from '../../../libComponents/AppButton';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import AppGradientView from '../../../libComponents/AppGradientView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppView from '../../../libComponents/AppView';
import AppText from '../../../libComponents/AppText';
import {routes} from '../../../utils/routes';
import {setLoggedIn} from '../../../redux/auth.reducer';
import AppTextInputLabel, {
  keyboardType,
} from '../../../libComponents/AppTextInputLabel';
import {CountryPicker, CountryButton} from 'react-native-country-codes-picker';
import Loader from '../../../libComponents/Loader';
import {useSelector} from 'react-redux';
import {ErrorToast} from '../../../utils/Toasters';
import {SignInApi} from '../../../Apis/AuthApis';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const isarkMode = useSelector(state => state.auth.isDarkMode);
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91');
  const [loading, setLoading] = useState(false);

  function ListHeaderComponent({countries, lang, onPress}) {
    return (
      <View
        style={{
          paddingBottom: 20,
        }}>
        <AppText>Popular countries</AppText>
        {countries?.map((country, index) => {
          return (
            <CountryButton
              key={index}
              item={country}
              name={country?.name?.[lang || 'en']}
              onPress={() => onPress(country)}
              style={{
                countryName: {
                  color: appColors.Black_color,
                },
                dialCode: {
                  color: appColors.Black_color,
                },
              }}
            />
          );
        })}
      </View>
    );
  }

  const handleSignIn = async () => {
    navigation.navigate(routes.Otp_Verification_Screen);
    // const device_token = await AsyncStorage.getItem('deviceToken');
    // const device_id = await AsyncStorage.getItem('deviceId');
    // const data = {
    //   phone: phoneNumber,
    //   countryCode: selectedCountryCode,
    //   device_token: device_token,
    //   device_id: device_id,
    // };
    // await SignInApi(data, navigation, setLoading);
  };

  return (
    <>
      {loading ? <Loader /> : ''}
      <AppGradientView
        style={{height: '100%'}}
        colors={appColors.HomeGradientPrimaryGradient2}>
        <AppStatusBar />
        <AppHeader />
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.infoContainer}>
            <Text style={styles.titleText}>Sign In with Phone</Text>
            <Text style={styles.titleText}>Number</Text>
            <Text style={styles.subtitleText}>
              Enter your details to sign in
            </Text>
          </View>
          <AppView style={styles.formContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                gap: 10,
              }}>
              <TouchableOpacity
                onPress={() => setShowCountryModal(true)}
                style={{
                  borderRadius: 10,
                  backgroundColor: isarkMode ? '#474747' : appColors.grayShade,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: 5,
                  paddingHorizontal: 10,
                }}>
                <AppText>{selectedCountryCode}</AppText>
                <AppIcon
                  Type={Icon.Entypo}
                  name={'chevron-small-down'}
                  size={20}
                />
              </TouchableOpacity>

              <AppTextInputLabel
                maxLength={10}
                autoFocus={true}
                keyboardType={keyboardType.number_pad}
                value={phoneNumber}
                placeholder="Enter Your 10 Digit Phone Number"
                onChangeText={text => setPhoneNumber(text)}
                style={styles.input}
              />
            </View>

            <AppButton
              disabled={phoneNumber.length !== 10 ? true : false}
              style={{
                marginTop: '20%',
                backgroundColor:
                  phoneNumber.length === 10
                    ? appColors.secondoryColor
                    : appColors.white,
                borderWidth: phoneNumber.length === 10 ? 0 : 1,
              }}
              title={'Next'}
              onPress={handleSignIn}
            />
          </AppView>
        </ScrollView>
        <CountryPicker
          show={showCountryModal}
          onRequestClose={() => setShowCountryModal(!showCountryModal)}
          pickerButtonOnPress={item => {
            setSelectedCountryCode(item.dial_code);
            setShowCountryModal(false);
          }}
          ListHeaderComponent={ListHeaderComponent}
          popularCountries={['in', 'na', 'pl']}
          style={{
            modal: {
              backgroundColor: isarkMode ? appColors.BLACK : appColors.white,
            },
            countryName: {
              color: appColors.Black_color,
            },
            dialCode: {
              color: appColors.Black_color,
            },
          }}
        />
      </AppGradientView>
    </>
  );
};

export default LoginScreen;

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
    flex: 1,
  },
  labelText: {
    fontSize: fp(2),
    color: appColors.BLACK,
    fontWeight: '600',
    marginTop: 20,
  },
  Sublabel: {
    color: appColors.Black_color,
    fontSize: 12,
    fontWeight: '500',
    opacity: 0.6,
    width: '100%',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
    color: appColors.BLACK,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
