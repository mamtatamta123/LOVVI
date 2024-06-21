import {
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Image,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import {routes} from '../utils/routes';
import appColors from '../utils/appColors';
import {useNavigation} from '@react-navigation/native';
import AppButton from '../libComponents/AppButton';
import {useSelector} from 'react-redux';
import AppText from '../libComponents/AppText';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ErrorToast} from '../utils/Toasters';

const WelcomeModal = ({
  isOpenWelcomeModal,
  setIsOpenWelcomeModal,
  name,
  setName,
}) => {
  const navigation = useNavigation();
  const isDarkMode = useSelector(state => state.auth.isDarkMode);

  useEffect(() => {
    const getName = async () => {
      const userName = await AsyncStorage.getItem('name');
      if (userName) {
        setName(userName);
      }
    };
    getName();
  }, []);

  const handleNameChange = async () => {
    if (name.length < 4) {
      ErrorToast('Username must be minimum of 4 characters');
      setIsOpenWelcomeModal(false);
      return;
    }
    await AsyncStorage.setItem('name', name);
    navigation.navigate(routes.DatePickr_Screen);
    setIsOpenWelcomeModal(false);
  };
  return (
    <>
      <Modal visible={isOpenWelcomeModal} transparent={true}>
        <StatusBar backgroundColor={appColors.modalbg} />
        <View style={styles.ModalViewContainer}>
          <LinearGradient
            style={{
              borderRadius: 10,
            }}
            colors={
              isDarkMode
                ? ['#454545', '#2D2D2D']
                : [appColors.white, appColors.white]
            }>
            <View style={styles.modalSubContent}>
              <Image
                resizeMode="contain"
                source={require('../assets/Images/bye.png')}
                style={styles.modalImage}
              />
              <AppText style={styles.modalTitle}>Welcome, User!</AppText>
              <AppText style={styles.modalText}>
                There's a lot to discover out there. But let's get your profile
                set up first.
              </AppText>
              <View style={{width: '100%', marginTop: 20}}>
                <AppButton title="Let’s go" onPress={handleNameChange} />
              </View>

              <TouchableOpacity onPress={() => setIsOpenWelcomeModal(false)}>
                <AppText style={styles.editNameText}>Edit Name</AppText>
              </TouchableOpacity>
            </View>
          </LinearGradient>
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
    // backgroundColor: appColors.white,
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
    // color: appColors.BLACK,
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalText: {
    // color: appColors.BLACK,
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    opacity: 0.6,
  },
  buttonContainer: {
    // marginTop: 20,
  },
  editNameText: {
    // color: appColors.BLACK,
    fontSize: 15,
    fontWeight: '500',
    marginTop: 10,
  },
});
