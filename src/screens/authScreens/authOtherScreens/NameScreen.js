import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import appColors from '../../../utils/appColors';
import {
  responsiveWidth as wp,
  responsiveFontSize as fp,
  responsiveHeight as hp,
} from 'react-native-responsive-dimensions';
import AppButton from '../../../libComponents/AppButton';
import AppGradientView from '../../../libComponents/AppGradientView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppView from '../../../libComponents/AppView';
import AppText from '../../../libComponents/AppText';
import {routes} from '../../../utils/routes';
import AppTextInputLabel from '../../../libComponents/AppTextInputLabel';
import WelcomeModal from '../../../Modals/WelcomeModal';

const NameScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [isOpenWelcomeModal, setIsOpenWelcomeModal] = useState(false);

  return (
    <>
      <WelcomeModal
        isOpenWelcomeModal={isOpenWelcomeModal}
        setIsOpenWelcomeModal={setIsOpenWelcomeModal}
        name={name}
        setName={setName}
      />
      <AppGradientView
        style={{height: '100%'}}
        colors={appColors.PrimaryGradient2}>
        <AppStatusBar />
        <AppHeader isBack={routes.House_Rules} />
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
              disabled={name ? false : true}
              style={{
                marginBottom: '3%',
                marginTop: '20%',
                backgroundColor: name
                  ? appColors.secondoryColor
                  : appColors.white,
                borderWidth: name ? 0 : 1,
              }}
              title={'Next'}
              onPress={() => setIsOpenWelcomeModal(true)}
            />
          </AppView>
        </ScrollView>
      </AppGradientView>
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
    // color: appColors.Black_color,
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.7,
    marginTop: 7,
  },
  formContainer: {
    // backgroundColor: appColors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 2,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  input: {
    marginTop: 20,
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
