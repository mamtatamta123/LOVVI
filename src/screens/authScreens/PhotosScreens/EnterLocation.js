import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  StatusBar,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppView from '../../../libComponents/AppView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';

import AppButton from '../../../libComponents/AppButton';

import {PermissionsAndroid} from 'react-native';
import {routes} from '../../../utils/routes';
import LoginScreen from '../authVerificationScreens/LoginScreen';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import {prepareAutoBatched} from '@reduxjs/toolkit';
import appColors from '../../../utils/appColors';
import AppTextInputLabel from '../../../libComponents/AppTextInputLabel';
import {setLoggedIn, setUsedAddres} from '../../../redux/auth.reducer';
import {useDispatch, useSelector} from 'react-redux';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {cleanSingle} from 'react-native-image-crop-picker';
import {ErrorToast} from '../../../utils/Toasters';

const EnterLocation = ({navigation}) => {
  const dispatch = useDispatch();
  const [streetLocation, setstreetLocation] = useState('');
  const [inputKey, setInputKey] = useState(0);
  const current = useSelector(state => state.auth.currentAddress);
  console.log('STREET LOCATION', streetLocation);

  useEffect(() => {
    if (current) {
      setstreetLocation(current);
      setInputKey(prevKey => prevKey + 1);
    }
  }, [current]);

  return (
    <>
      <AppView
        style={{
          backgroundColor: appColors.white,
          flex: 1,
          paddingHorizontal: 15,
        }}>
        <AppStatusBar isDark={false} isbg={false} />
        <AppHeader isBlack={true} isColor={true} />
        <AppText style={styles.textContainer}>Enter Your Location?</AppText>
        <View
          style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
          <AppIcon Type={Icon.EvilIcons} name={'search'} />
          <GooglePlacesAutocomplete
            key={inputKey}
            textInputProps={{
              value: streetLocation,
              // onChangeText: text => setstreetLocation(text),
            }}
            placeholder="Search"
            minLength={2}
            fetchDetails={false}
            onPress={(data, details = null) => {
              // console.log(data, 'details?.formatted_address');
              setstreetLocation(details?.description);
            }}
            query={{
              key: 'AIzaSyAKfvrGBxXsxJ2AovOGAdltyorLy4ytT1I',
              language: 'en',
            }}
          />

          <TouchableOpacity onPress={() => setstreetLocation(null)}>
            <AppIcon Type={Icon.MaterialIcons} name={'cancel'} size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.textInput}>
          <TouchableOpacity
            onPress={() => {
              setstreetLocation(current);
              // dispatch(setLoggedIn(true));
            }}
            style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <AppIcon
              Type={Icon.MaterialCommunityIcons}
              name={'near-me'}
              size={18}
              color={appColors.primaryColor}
            />
            <AppText
              style={{
                color: appColors.Black_color,
                fontSize: 14,
                fontWeight: '600',
              }}>
              Use my current location
            </AppText>
          </TouchableOpacity>
          <View
            style={{borderBottomWidth: 1, borderColor: appColors.BLACK}}></View>
        </View>
        {/* <View style={styles.textInput}>
          <TouchableOpacity
            onPress={() => {
              setstreetLocation(currentAddress);
              dispatch(setLoggedIn(true));
            }}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <AppIcon
              Type={Icon.MaterialCommunityIcons}
              name={'near-me'}
              size={18}
              color={appColors.primaryColor}
            />
            <AppText
              style={{
                color: appColors.Black_color,
                fontSize: 14,
                fontWeight: '600',
              }}>
              {streetLocation}
            </AppText>
          </TouchableOpacity>
        </View> */}
        <AppButton
          title="Next"
          style={{marginTop: 30}}
          onPress={() => {
            if (streetLocation) {
              dispatch(setLoggedIn(false));
              dispatch(setUsedAddres(streetLocation));
            } else {
              ErrorToast('Enter your location to continue');
            }
          }}
        />
      </AppView>
    </>
  );
};

export default EnterLocation;

const styles = StyleSheet.create({
  textContainer: {
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 20,
  },
  textInput: {
    // borderWidth: 1,
    borderRadius: 10,
    borderColor: appColors.TextInput_BgColor,
    // paddingHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  predefinedPlacesDescription: {
    color: appColors.primaryColor,
  },
});
