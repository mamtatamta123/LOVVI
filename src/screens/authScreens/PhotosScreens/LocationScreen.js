import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  StatusBar,
  Image,
  Alert,
  PermissionsAndroid,
  Linking,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import AppView from '../../../libComponents/AppView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';
import AppButton from '../../../libComponents/AppButton';
import {routes} from '../../../utils/routes';
import LoginScreen from '../authVerificationScreens/LoginScreen';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import {prepareAutoBatched} from '@reduxjs/toolkit';
import appColors from '../../../utils/appColors';
import MapView from 'react-native-maps';

const LocationScreen = ({navigation}) => {
  const getPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const res = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        );
        console.log('res', res);
        if (res == 'granted') {
          navigation.navigate(routes.Allow_Location);
        } else {
          Linking.openSettings();
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  return (
    <>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <AppView
        style={{
          backgroundColor: appColors.white,
          flex: 1,
          paddingHorizontal: 15,
        }}>
        <AppStatusBar isDark={false} isbg={false} />
        <AppHeader isBlack={true} isColor={true} />
        <AppText style={styles.textContainer}>
          So, are you from around here?
        </AppText>
        <AppText style={styles.textsubcontainer}>
          Set your location to see who' in your area or beyond. You won't be
          able to match with people otherwise.
        </AppText>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 250,
              width: 250,
              borderRadius: 125,
              borderColor: appColors.IconColor,
              backgroundColor: '#F7F7F7',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginBottom: '25%',
            }}>
            <AppIcon
              Type={Icon.FontAwesome6}
              name={'location-dot'}
              size={80}
              color={appColors.DARK_GRAY}
            />
          </View>
        </View>

        <AppButton
          title="Allow"
          style={{marginTop: 'auto', marginBottom: '10%'}}
          onPress={() => {
            // getPermission();
            navigation.navigate(routes.Enter_Location);
          }}
        />
      </AppView>
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
