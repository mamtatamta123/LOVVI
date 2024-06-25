import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  PermissionsAndroid,
  Linking,
  Platform,
  TouchableOpacity,
} from 'react-native';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppText from '../../../libComponents/AppText';
import AppButton from '../../../libComponents/AppButton';
import {routes} from '../../../utils/routes';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import appColors from '../../../utils/appColors';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
// import Geolocation from 'react-native-geolocation-service';
import {useDispatch} from 'react-redux';
import {setCurrentAddress} from '../../../redux/auth.reducer';
import LottieView from 'lottie-react-native';
import GetLocation from 'react-native-get-location';
import {isLocationEnabled} from 'react-native-android-location-enabler';
import {promptForEnableLocationIfNeeded} from 'react-native-android-location-enabler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LocationScreen = ({navigation}) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setlongitude] = useState('');
  const [buttonLoder, setButtonLoder] = useState(false);
  const [locationUpdate, setLocationUpdate] = useState('');
  const [updateComponent, setUpdateComponent] = useState(false);
  const dispatch = useDispatch();

  async function handleEnabledPressed() {
    if (Platform.OS === 'android') {
      try {
        const enableResult = await promptForEnableLocationIfNeeded();
        console.log('enableResult', enableResult);
        if (enableResult === 'enabled') {
          return true;
        }
        // The user has accepted to enable the location services
        // data can be :
        //  - "already-enabled" if the location services has been already enabled
        //  - "enabled" if user has clicked on OK button in the popup
      } catch (error) {
        if (error) {
          // console.error(error.message);
          if (error.message === 'ERR00') {
            return handleCheckPressed();
          }

          return false;
          // The user has not accepted to enable the location services or something went wrong during the process
          // "err" : { "code" : "ERR00|ERR01|ERR02|ERR03", "message" : "message"}
          // codes :
          //  - ERR00 : The user has clicked on Cancel button in the popup
          //  - ERR01 : If the Settings change are unavailable
          //  - ERR02 : If the popup has failed to open
          //  - ERR03 : Internal error
        }
      }
    }
  }

  async function handleCheckPressed() {
    if (Platform.OS === 'android') {
      const checkEnabled = await isLocationEnabled();
      if (checkEnabled) {
        return true;
      } else {
        return handleEnabledPressed();
      }
    }
  }

  const requestLocationPermission = async () => {
    try {
      const isEnabled = await handleCheckPressed();
      if (isEnabled) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        console.log('granted', granted);
        if (granted === 'granted') {
          console.log('granteddddddddddddddddd');
          return true;
        } else {
          console.log('granted hello', granted);
          if (granted === 'denied' || granted === 'never_ask_again') {
            Linking.openSettings();
          }

          return false;
        }
      }
    } catch (err) {
      console.log('requestLocationPermission error', err);
      return false;
    }
  };

  useEffect(() => {
    const getLocation = async () => {
      const result = await requestLocationPermission();
      if (result) {
        try {
          const location = await GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 60000,
            forceRequestLocation: true,
          });
          console.log('location', location);
          setLatitude(location.latitude);
          setlongitude(location.longitude);
          await AsyncStorage.setItem('latitude', String(location.latitude));
          await AsyncStorage.setItem('longitude', String(location.longitude));
        } catch (error) {
          console.log('Error in getLocation:', error);
          const {code, message} = error;
          console.log('UDAY', code, message);
        }
      }
    };
    getLocation();
  }, [updateComponent]);

  const getLocation = () => {
    setButtonLoder(true);
    const reverseGeocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAKfvrGBxXsxJ2AovOGAdltyorLy4ytT1I`;
    fetch(reverseGeocodingUrl)
      .then(response => response.json())
      .then(async result => {
        await AsyncStorage.setItem(
          'address',
          result?.results[0]?.formatted_address,
        );
        dispatch(setCurrentAddress(result?.results[0]?.formatted_address));
        navigation.navigate(routes.Enter_Location);
        setButtonLoder(false);
      })
      .catch(e => {
        console.log('error', e);
        setButtonLoder(false);
      });
  };

  return (
    <>
      <AppStatusBar isbg={false} isDark={true} />
      {latitude && longitude ? (
        <>
          <MapView
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            zoomControlEnabled={true}
            showsCompass={true}
            style={{width: '100%', height: '90%'}}
            region={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}>
            <Marker
              description="hello"
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
            />
          </MapView>

          <View style={{paddingHorizontal: 20, marginTop: 20}}>
            <AppButton
              disabled={buttonLoder}
              loading={buttonLoder}
              title="Use my current location"
              style={{marginTop: 'auto', marginBottom: '10%'}}
              onPress={() => {
                getLocation();
              }}
            />
          </View>
        </>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            style={{height: '90%', width: '100%'}}
            source={require('../../../assets/animations/findLocation.json')}
            autoPlay
            loop
          />
          <View
            style={{position: 'absolute', bottom: '30%', alignItems: 'center'}}>
            {locationUpdate === 'UNAVAILABLE' ? (
              <>
                <AppText
                  style={{
                    fontSize: 19,
                    color: appColors.Black_color,
                    fontWeight: '600',
                  }}>
                  Please enable your mobile location
                </AppText>
                <TouchableOpacity
                  onPress={() => setUpdateComponent(!updateComponent)}>
                  <AppIcon
                    Type={Icon.Feather}
                    name="refresh-ccw"
                    size={30}
                    color={appColors.Black_color}
                  />
                </TouchableOpacity>
              </>
            ) : (
              <>
                {locationUpdate === 'never_ask_again' ? (
                  <>
                    <AppText
                      style={{
                        fontSize: 19,
                        color: appColors.Black_color,
                        fontWeight: '600',
                      }}>
                      Allow location permission in settings
                    </AppText>
                    <TouchableOpacity onPress={() => Linking.openSettings()}>
                      <AppIcon
                        Type={Icon.AntDesign}
                        name="setting"
                        size={30}
                        color={appColors.Black_color}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setUpdateComponent(!updateComponent)}>
                      <AppIcon
                        Type={Icon.Feather}
                        name="refresh-ccw"
                        size={30}
                        color={appColors.Black_color}
                      />
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <AppText
                      style={{
                        fontSize: 19,
                        color: appColors.Black_color,
                        fontWeight: '600',
                      }}>
                      Please wait
                    </AppText>
                    <AppText
                      style={{
                        fontSize: 16,
                        color: appColors.DARK_GRAY,
                        fontWeight: '400',
                      }}>
                      Finding your current location
                    </AppText>
                  </>
                )}
              </>
            )}
          </View>
        </View>
      )}
    </>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  textContainer: {
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 20,
  },
  textsubcontainer: {
    fontWeight: 'bold',
    color: appColors.Black_color,
    fontSize: 14,
    opacity: 0.5,
    marginTop: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  columnContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  redBox: {
    height: 210,
    width: 210,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  blueBox: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  greenBox: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  yellowBox: {
    height: 100,
    width: 100,
    backgroundColor: 'yellow',
    borderRadius: 10,
  },
  purpleBox: {
    height: 100,
    width: 100,
    backgroundColor: 'purple',
    borderRadius: 10,
  },
  orangeBox: {
    height: 100,
    width: 100,
    backgroundColor: 'orange',
    borderRadius: 10,
  },
  ModalViewContainer: {
    backgroundColor: appColors.modalbg,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '8%',
  },

  modalSubContent: {
    backgroundColor: appColors.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    borderRadius: 10,
  },
  modalImage: {
    height: '35%',
    width: '50%',
  },
  modalTitle: {
    color: appColors.BLACK,
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalText: {
    color: appColors.BLACK,
    fontSize: 15,
    fontWeight: '400',
    width: '80%',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  editNameText: {
    color: appColors.BLACK,
    fontSize: 15,
    fontWeight: '500',
    marginTop: 10,
  },
});
