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
import {Icon} from '../../../libComponents/AppIcon';
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

const LoginScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const [selectedCountry, setSelectedCountry] = useState(null);

  const countryDropdownRef = useRef(countries);
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
          <Text style={styles.titleText}>Sign In with Phone</Text>
          <Text style={styles.titleText}>Number</Text>

          <Text style={styles.subtitleText}>Enter your details to sign in</Text>
        </View>

        <AppView style={styles.formContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                borderWidth: 1,
                width: '40%',
                borderRadius: 10,
                borderColor: appColors.TextInput_BgColor,
                backgroundColor: appColors.TextInput_BgColor,
                // backgroundColor: 'red',
                height: 50,
                marginRight: 2,
              }}>
              <SelectCountry
                ref={countryDropdownRef}
                value={selectedCountry}
                data={countries}
                placeholder="Select country"
                searchPlaceholder="Search..."
                onChange={country => setSelectedCountry(country.value)}
              />
            </View>
            <AppTextInputLabel
              autoFocus={true}
              keyboardType={keyboardType.number_pad}
              labelText="Phone Number"
              value={phoneNumber}
              placeholder="Enter Your Phone Number"
              onChangeText={text => setPhoneNumber(text)}
              style={styles.input}
            />
          </View>
          <AppButton
            style={{marginTop: '20%'}}
            title={'Next'}
            onPress={() => navigation.navigate(routes.Email_Verification)}
          />
        </AppView>
      </ScrollView>
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
    // marginTop: 20,
    // marginHorizontal: 20,
    width: '60%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    paddingHorizontal: wp(5),
    marginTop: hp(0.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxText: {
    color: appColors.BLACK,
    fontSize: fp(2),
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
  dropdown: {
    // margin: 16,
  },
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
});
