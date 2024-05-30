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
import AppTextInputLabel from '../../../libComponents/AppTextInputLabel';

const NameScreen = ({navigation}) => {
  const [name, setName] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };
  return (
    <>
      <AppGradientView
        style={{height: '100%'}}
        colors={appColors.PrimaryGradient2}>
        <AppStatusBar />
        <AppHeader />
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.infoContainer}>
            <Text style={styles.titleText}>What’s your</Text>
            <Text style={styles.titleText}>Full name?</Text>
          </View>

          <AppView style={styles.formContainer}>
            <AppTextInputLabel
              keyboardType={'email-address'}
              labelText="Full Name"
              value={name}
              placeholder="Enter Your Full Name"
              onChangeText={text => setName(text)}
              // IconType={Icon.Feather}
              // Iconsize={22}
              // Iconname={'mail'}
              Iconcolor={appColors.IconColor}
              style={styles.input}
            />

            <AppText style={styles.subtitleText}>
              This is how it’ll appear on your profile.
            </AppText>

            <AppText
              style={{
                color: appColors.BLACK,
                fontSize: 14,
                fontWeight: '500',

                marginTop: 2,
              }}>
              Can’t change it later.
            </AppText>
            <AppText
              style={{fontSize: 13, width: '100%', marginTop: 5}}></AppText>

            <AppButton
              style={{marginBottom: '3%', marginTop: '20%'}}
              title={'Next'}
              onPress={openModal}
            />
          </AppView>
        </ScrollView>
      </AppGradientView>

      {/* ////////////////MODAL/////////////////////////////////////////////////// */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(!isModalVisible)}>
        <StatusBar backgroundColor={appColors.modalbg} />

        <View style={styles.ModalViewContainer}>
          <View style={styles.modalSubContent}>
            <Image
              source={require('../../../assets/Images/bye.png')}
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
                style={{marginHorizontal: 20}}
                onPress={() => navigation.navigate(routes.DatePickr_Screen)}
              />
            </View>
            <TouchableOpacity
              onPress={() => setIsModalVisible(!isModalVisible)}>
              <Text style={styles.editNameText}>Edit Name</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default NameScreen;

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
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.7,
    marginTop: 7,
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
    marginTop: 20,
    // marginHorizontal: 20,
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
  ModalViewContainer: {
    backgroundColor: appColors.modalbg,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },

  modalSubContent: {
    backgroundColor: appColors.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
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