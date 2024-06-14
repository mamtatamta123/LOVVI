import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  PermissionsAndroid,
  Linking,
  Platform,
  Text,
} from 'react-native';
import AppView from '../../../libComponents/AppView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';
import AppButton from '../../../libComponents/AppButton';
import {routes} from '../../../utils/routes';
import LoginScreen from '../authVerificationScreens/LoginScreen';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import appColors from '../../../utils/appColors';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch} from 'react-redux';
import {setCurrentAddress} from '../../../redux/auth.reducer';
import LottieView from 'lottie-react-native';

const LocationScreen = ({navigation}) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setlongitude] = useState('');
  const [buttonLoder, setButtonLoder] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        console.log(info?.coords, '-----------coords');
        setLatitude(info.coords.latitude);
        setlongitude(info.coords.longitude);
      },
      error => {
        console.warn(error, '---error ');
      },
      {
        enableHighAccuracy: true,
        timeout: 50000,
        maximumAge: 1000,
      },
    );
  }, []);
  console.log('latitude=========', latitude, longitude);

  const getLocation = () => {
    setButtonLoder(true);
    const reverseGeocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAKfvrGBxXsxJ2AovOGAdltyorLy4ytT1I`;
    fetch(reverseGeocodingUrl)
      .then(response => response.json())
      .then(result => {
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
    fontWeight: '500',
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
