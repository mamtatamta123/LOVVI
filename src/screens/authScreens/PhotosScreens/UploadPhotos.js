import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  StatusBar,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import AppView from '../../../libComponents/AppView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';

import AppButton from '../../../libComponents/AppButton';

import { PermissionsAndroid } from 'react-native';


const UploadPhotos = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);


  const openModal = () => {
    setIsModalVisible(true);
  };
  const getPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]);

        if (
          Object.values(granted).every(
            permission => permission === PermissionsAndroid.RESULTS.GRANTED,
          )
        ) {
          console.log('All permissions granted');
        } else {
          console.log('Some permissions not granted');
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

        <View style={styles.container}>
          <View style={styles.columnContainer}>
            <View style={styles.redBox}></View>

            <View style={{flexDirection: 'row'}}>
              <View style={styles.blueBox}></View>
              <View
                style={{
                  width: 10,
                }}></View>
              <View style={styles.greenBox}></View>
            </View>
          </View>

          <View style={styles.columnContainer}>
            <View style={styles.yellowBox}></View>
            <View
              style={{
                height: 10,
              }}></View>
            <View style={styles.purpleBox}></View>
            <View
              style={{
                height: 10,
              }}></View>
            <View style={styles.orangeBox}></View>
          </View>
        </View>

        <AppButton
          title="Next"
          style={{marginTop: '20%'}}
          
          onPressIn={openModal}
          
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
              onPress={getPermission}
              
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
