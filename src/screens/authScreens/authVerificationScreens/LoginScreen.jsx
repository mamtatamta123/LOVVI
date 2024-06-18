import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
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
import CheckBox from '@react-native-community/checkbox';
import {setLoggedIn} from '../../../redux/auth.reducer';
import AppTextInputLabel, {
  keyboardType,
} from '../../../libComponents/AppTextInputLabel';
import {SelectCountry} from 'react-native-element-dropdown';
import {countries} from '../../../utils/constants';
import {CountryPicker, CountryButton} from 'react-native-country-codes-picker';
import Loader from '../../../libComponents/Loader';
import {useSelector} from 'react-redux';

const LoginScreen = ({navigation}) => {
  const isarkMode = useSelector(state => state.auth.isDarkMode);
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91');
  const [buttonLoader, setButtonLoader] = useState(false);

  function ListHeaderComponent({countries, lang, onPress}) {
    return (
      <View
        style={{
          paddingBottom: 20,
        }}>
        <Text>Popular countries</Text>
        {countries?.map((country, index) => {
          return (
            <CountryButton
              key={index}
              item={country}
              name={country?.name?.[lang || 'en']}
              onPress={() => onPress(country)}
            />
          );
        })}
      </View>
    );
  }

  return (
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
          <Text style={styles.subtitleText}>Enter your details to sign in</Text>
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
              <Text style={{color: appColors.DARK_GRAY}}>
                {selectedCountryCode}
              </Text>
              <AppIcon
                Type={Icon.Entypo}
                name={'chevron-small-down'}
                size={20}
                color={appColors.DARK_GRAY}
              />
            </TouchableOpacity>

            <AppTextInputLabel
              maxLength={10}
              autoFocus={true}
              keyboardType={keyboardType.number_pad}
              // labelText="Phone Number"
              value={phoneNumber}
              placeholder="Enter Your Phone Number"
              onChangeText={text => setPhoneNumber(text)}
              style={styles.input}
              validationError={phoneNumberError}
            />
          </View>

          <AppButton
            setButtonLoader={true}
            style={{marginTop: '20%'}}
            title={'Next'}
            onPress={() => navigation.navigate(routes.Otp_Verification_Screen)}
          />
        </AppView>
      </ScrollView>
      <CountryPicker
        // searchMessage={'ind'}
        show={showCountryModal}
        onRequestClose={() => setShowCountryModal(!showCountryModal)}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={item => {
          // console.log('item=-----', item);
          setSelectedCountryCode(item.dial_code);
          setShowCountryModal(false);
        }}
        ListHeaderComponent={ListHeaderComponent}
        popularCountries={['in', 'na', 'pl']}
      />
    </AppGradientView>
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
    // backgroundColor: appColors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 2,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  input: {
    // width: '82%',
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
  // dropdown: {
  //   margin: 16,
  // },
  // imageStyle: {
  //   width: 24,
  //   height: 24,
  //   borderRadius: 12,
  // },
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
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
});
