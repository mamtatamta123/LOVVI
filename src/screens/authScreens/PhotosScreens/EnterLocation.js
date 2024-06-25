import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppView from '../../../libComponents/AppView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';
import AppButton from '../../../libComponents/AppButton';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import appColors from '../../../utils/appColors';
import {setLoggedIn, setUsedAddres} from '../../../redux/auth.reducer';
import {useDispatch, useSelector} from 'react-redux';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {ErrorToast} from '../../../utils/Toasters';
import {routes} from '../../../utils/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userProfileCompletionApi} from '../../../Apis/AuthApis';

const EnterLocation = ({navigation}) => {
  const dispatch = useDispatch();
  const isarkMode = useSelector(state => state.auth.isDarkMode);
  const [streetLocation, setstreetLocation] = useState('');
  const [inputKey, setInputKey] = useState(0);
  const current = useSelector(state => state.auth.currentAddress);
  // console.log('streetLocation', streetLocation);

  useEffect(() => {
    if (current) {
      setstreetLocation(current);
      setInputKey(prevKey => prevKey + 1);
    }
  }, [current]);

  const handleLogin = async () => {
    const interest = await AsyncStorage.getItem('interest');
    console.log('interest', interest);
    const schooling = await AsyncStorage.getItem('school');
    console.log('schooling', schooling);
    const distance = await AsyncStorage.getItem('distance');
    console.log('distance', distance);
    const cardItem = await AsyncStorage.getItem('lookingFor');
    console.log('lookingFor', cardItem);
    const interestedGender = await AsyncStorage.getItem('interestedGender');
    console.log('interestedGender', interestedGender);
    const bodyOrientation = await AsyncStorage.getItem('bodyOrientation');
    console.log('bodyOrientation', bodyOrientation);
    const gender = await AsyncStorage.getItem('gender');
    console.log('gender', gender);
    const dob = await AsyncStorage.getItem('dob');
    console.log('dob', dob);
    const userName = await AsyncStorage.getItem('name');
    console.log('userName', userName);
    const userEmail = await AsyncStorage.getItem('email');
    console.log('userEmail', userEmail);
    const phoneNumber = await AsyncStorage.getItem('phoneNumber');
    console.log('phoneNumber', phoneNumber);
    const latitude = await AsyncStorage.getItem('latitude');
    console.log('latitude', latitude);
    const longitude = await AsyncStorage.getItem('longitude');
    console.log('longitude', longitude);
    const deviceToken = await AsyncStorage.getItem('deviceToken');
    console.log('deviceToken', deviceToken);
    const deviceId = await AsyncStorage.getItem('deviceId');
    console.log('deviceId', deviceId);
    const address = await AsyncStorage.getItem('address');
    console.log('address', address);
    const data = {
      phone: phoneNumber,
      fullName: userName,
      email: userEmail,
      gender: gender,
      DOB: dob,
      bodyOrientation: bodyOrientation,
      houseRule: 'Renting',
      interestedIn: interestedGender,
      lookingFor: cardItem,
      lat: latitude,
      lng: longitude,
      distance: distance,
      schooling: schooling,
      address: address,
      hobbies: interest,
      location: address,
      device_token: deviceToken,
      device_id: deviceId,
      profileImg:
        'https://img.freepik.com/free-photo/portrait-man-having-great-time_23-2149443790.jpg',
      image_1:
        'https://img.freepik.com/free-photo/portrait-man-having-great-time_23-2149443790.jpg',
      image_2:
        'https://img.freepik.com/free-photo/portrait-man-having-great-time_23-2149443790.jpg',
      image_3:
        'https://img.freepik.com/free-photo/portrait-man-having-great-time_23-2149443790.jpg',
      image_4:
        'https://img.freepik.com/free-photo/portrait-man-having-great-time_23-2149443790.jpg',
      image_5:
        'https://img.freepik.com/free-photo/portrait-man-having-great-time_23-2149443790.jpg',
      image_6:
        'https://img.freepik.com/free-photo/portrait-man-having-great-time_23-2149443790.jpg',
    };
    await userProfileCompletionApi(data, dispatch,streetLocation);
  };

  return (
    <>
      <AppView
        style={{
          flex: 1,
          paddingHorizontal: 15,
        }}>
        <AppStatusBar isDark={false} isbg={false} />
        <AppHeader
          isBlack={true}
          isColor={true}
          isBack={routes.Upload_Photos}
        />
        <AppText style={styles.textContainer}>Enter Your Location?</AppText>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            marginTop: 10,
            borderRadius: 5,
            borderWidth: 0.5,
          }}>
          <GooglePlacesAutocomplete
            key={inputKey}
            textInputProps={{
              value: streetLocation,
            }}
            placeholder="Search Your Location"
            minLength={2}
            fetchDetails={false}
            onPress={async (data, details = null) => {
              console.log('googleplaceautocomplete', details);
              await AsyncStorage.setItem('address', details?.description);
              setstreetLocation(details?.description);
            }}
            query={{
              key: 'AIzaSyAKfvrGBxXsxJ2AovOGAdltyorLy4ytT1I',
              language: 'en',
            }}
            styles={{
              textInput: {
                color: isarkMode ? appColors.white : appColors.Black_color,
                backgroundColor: isarkMode ? '#474747' : appColors.white,
              },
              predefinedPlacesDescription: {
                color: '#5d5d5d',
              },
              listView: {
                color: '#5d5d5d',
              },
              description: {
                color: '#5d5d5d',
              },
            }}
          />
          {streetLocation && (
            <TouchableOpacity
              onPress={() => setstreetLocation(null)}
              style={{marginTop: 12}}>
              <AppIcon
                Type={Icon.MaterialIcons}
                name={'cancel'}
                size={20}
                color={appColors.secondoryColor}
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.textInput}>
          <TouchableOpacity
            onPress={async () => {
              await AsyncStorage.setItem('address', current);
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
              handleLogin();
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
