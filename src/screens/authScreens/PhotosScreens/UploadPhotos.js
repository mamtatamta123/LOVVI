import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  StatusBar,
  Image,
  Alert,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import AppView from '../../../libComponents/AppView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';

import {PermissionsAndroid} from 'react-native';
import {routes} from '../../../utils/routes';
import AppButton from '../../../libComponents/AppButton';
import appColors from '../../../utils/appColors';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import AppPrimaryButton from '../../../libComponents/AppPrimaryButton';

const UploadPhotos = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showSelectOptionModal, setShowSelectOptionModal] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const getPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        console.log('granted====', granted);
        // if (granted[PermissionsAndroid.PERMISSIONS.CAMERA] === PermissionsAndroid.RESULTS.GRANTED &&
        //   granted[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION] === PermissionsAndroid.RESULTS.GRANTED &&){
        //   }
        if (granted !== 'granted') {
          console.log('hello');
          Linking.openSettings();
        } else {
          setIsModalVisible(!isModalVisible);
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

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
        <AppText style={styles.textContainer}>Upload Your Photos</AppText>
        <AppText style={styles.textsubcontainer}>
          To Boost Your Daily Match Potential, Include your Photos
        </AppText>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            // paddingVertical:20
            marginTop:30
          }}>
        
          <TouchableOpacity
            onPress={() => setShowSelectOptionModal(!showSelectOptionModal)}
            activeOpacity={0.5}
            style={styles.redBox}>
            <AppIcon
              Type={Icon.AntDesign}
              name={'pluscircle'}
              color={appColors.primaryColor}
              size={26}
            />
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'space-between',
              width: '35%',
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={() => setShowSelectOptionModal(!showSelectOptionModal)}
              activeOpacity={0.5}
              style={styles.blueBox}>
              <AppIcon
                Type={Icon.AntDesign}
                name={'pluscircle'}
                color={appColors.primaryColor}
                size={26}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowSelectOptionModal(!showSelectOptionModal)}
              activeOpacity={0.5}
              style={styles.greenBox}>
              <AppIcon
                Type={Icon.AntDesign}
                name={'pluscircle'}
                color={appColors.primaryColor}
                size={26}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={() => setShowSelectOptionModal(!showSelectOptionModal)}
            activeOpacity={0.5}
            style={styles.yellowBox}>
            <AppIcon
              Type={Icon.AntDesign}
              name={'pluscircle'}
              color={appColors.primaryColor}
              size={26}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShowSelectOptionModal(!showSelectOptionModal)}
            activeOpacity={0.5}
            style={styles.purpleBox}>
            <AppIcon
              Type={Icon.AntDesign}
              name={'pluscircle'}
              color={appColors.primaryColor}
              size={26}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShowSelectOptionModal(!showSelectOptionModal)}
            activeOpacity={0.5}
            style={styles.orangeBox}>
            <AppIcon
              Type={Icon.AntDesign}
              name={'pluscircle'}
              color={appColors.primaryColor}
              size={26}
            />
          </TouchableOpacity>
        </View>

        <AppButton
          title="Next"
          style={{marginTop: '20%'}}
          onPressIn={() => navigation.navigate(routes.Location_Screen)}
        />
      </AppView>

      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(!isModalVisible)}>
        <StatusBar backgroundColor={appColors.modalbg} />
        <View style={styles.ModalViewContainer}>
          <View style={styles.modalSubContent}>
            <Text style={styles.modalTitle}>Photo Access </Text>
            <Text style={styles.modalText}>
              To upload photos from your device. Lovvi needs to access your
              photos.
            </Text>
            <Text style={styles.modalText}>
              Please tap "Allow" in the next step
            </Text>
            <View style={{width: '100%', marginTop: 20}}>
              <AppButton
                title="Okay"
                style={{marginHorizontal: 20}}
                // onPress={getPermission}
                // onPress={() => navigation.navigate(routes.Select_Source)}
              />
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showSelectOptionModal}
        onRequestClose={() => setShowSelectOptionModal(!showSelectOptionModal)}>
        <View
          style={{
            width: '100%',
            position: 'absolute',
            backgroundColor: 'red',
            bottom: 0,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            backgroundColor: appColors.white,
            borderTopWidth: 0.6,
            borderRightWidth: 0.6,
            borderLeftWidth: 0.6,
            borderColor: appColors.Black_color,
          }}>
          <View
            style={{
              paddingHorizontal: 20,
              paddingTop: 20,
              paddingBottom: 30,
              alignItems: 'center',
            }}>
            <AppText style={{fontSize: 18, fontWeight: 'bold'}}>
              Select Option
            </AppText>
            <View
              style={{
                width: '100%',
                paddingVertical: 30,
              }}>
              <AppButton
                title="Take photo"
                style={{
                  width: '100%',
                  backgroundColor: appColors.white,
                  borderWidth: 1,
                }}
              />
              <AppButton
                title="Choose from gallery"
                style={{
                  width: '100%',
                  marginTop: 30,
                  backgroundColor: appColors.white,
                  borderWidth: 1,
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default UploadPhotos;

const styles = StyleSheet.create({
  textContainer: {
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 20,
  },
  textsubcontainer: {
    fontWeight: 'bold',
    color: appColors.Black_color,
    fontSize: 15,
    fontWeight: '500',
    opacity: 0.5,
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
    width: '65%',
    backgroundColor: appColors.greenShade,
    borderRadius: 10,
    borderColor: appColors.primaryColor,
    borderWidth: 2,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueBox: {
    height: 100,
    width: '90%',
    backgroundColor: appColors.greenShade,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: appColors.primaryColor,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenBox: {
    height: 100,
    width: '90%',
    backgroundColor: appColors.greenShade,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: appColors.primaryColor,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yellowBox: {
    height: 100,
    width: '31%',
    backgroundColor: appColors.greenShade,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: appColors.primaryColor,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    height: 100,
    width: '31%',
    backgroundColor: appColors.greenShade,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: appColors.primaryColor,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orangeBox: {
    height: 100,
    width: '31%',
    backgroundColor: appColors.greenShade,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: appColors.primaryColor,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
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
