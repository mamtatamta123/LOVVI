import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {routes} from '../utils/routes';
import appColors from '../utils/appColors';

import {
  responsiveWidth as wp,
  responsiveFontSize as fp,
  responsiveHeight as hp,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import AppButton from '../libComponents/AppButton';

const WelcomeModal = ({isOpenWelcomeModal, setIsOpenWelcomeModal}) => {
  const navigation = useNavigation();
  return (
    <>
      <Modal visible={isOpenWelcomeModal}>
        <StatusBar backgroundColor={appColors.modalbg} />
        <View style={styles.ModalViewContainer}>
          <View style={styles.modalSubContent}>
            <Image
              resizeMode="contain"
              source={require('../assets/Images/bye.png')}
              style={styles.modalImage}
            />
            <Text style={styles.modalTitle}>Welcome, User!</Text>
            <Text style={styles.modalText}>
              There's a lot to discover out there. But let's get your profile
              set up first.
            </Text>
            <View style={{width: '100%', marginTop: 20}}>
              <AppButton
                title="Let’s go"
                onPress={() => {
                  navigation.navigate(routes.DatePickr_Screen),
                    setIsOpenWelcomeModal(false);
                }}
              />
            </View>

            <TouchableOpacity onPress={() => setIsOpenWelcomeModal(false)}>
              <Text style={styles.editNameText}>Edit Name</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default WelcomeModal;

const styles = StyleSheet.create({
  ModalViewContainer: {
    backgroundColor: appColors.modalbg,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '7%',
  },
  modalSubContent: {
    backgroundColor: appColors.white,
    borderRadius: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    paddingBottom: 25,
  },
  modalImage: {
    height: 100,
    width: 100,
    // height: '29%',
    // width: '50%',
    // backgroundColor: 'red',
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
    textAlign: 'center',
    opacity: 0.6,
  },
  buttonContainer: {
    // marginTop: 20,
  },
  editNameText: {
    color: appColors.BLACK,
    fontSize: 15,
    fontWeight: '500',
    marginTop: 10,
  },
});
