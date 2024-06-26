import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import AppTextInputLabel from '../../../libComponents/AppTextInputLabel';
import {ErrorToast} from '../../../utils/Toasters';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EmailVerification = ({navigation}) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const getEmail = async () => {
      const userEmail = await AsyncStorage.getItem('email');
      if (userEmail) {
        setEmail(userEmail);
      }
    };
    getEmail();
  }, []);

  const handleEmailChange = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      ErrorToast('Email is not valid');
      return;
    }
    await AsyncStorage.setItem('email', email);
    navigation.navigate(routes.House_Rules);
    await AsyncStorage.setItem('lastVisitedRoute', routes.House_Rules);
  };

  return (
    <AppGradientView
      style={{height: '100%'}}
      colors={appColors.PrimaryGradient2}>
      <AppStatusBar />
      <AppHeader isBack={routes.Login_Screen} />
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>Enter your </Text>
          <Text style={styles.titleText}>Email</Text>
        </View>

        <AppView style={styles.formContainer}>
          <AppTextInputLabel
            autoFocus={true}
            labelText="Email"
            value={email}
            placeholder="Enter Your Email"
            onChangeText={text => setEmail(text)}
            IconType={Icon.Feather}
            Iconsize={22}
            Iconname={'mail'}
            Iconcolor={appColors.IconColor}
            style={styles.input}
            line={true}
            icon={true}
          />

          <AppText style={{fontSize: 13, width: '100%', marginTop: 5}}>
            Don't lose access to your account, verify your email.
          </AppText>

          <AppButton
            disabled={email ? false : true}
            style={{
              marginBottom: '3%',
              marginTop: '20%',
              backgroundColor: email
                ? appColors.secondoryColor
                : appColors.white,
              borderWidth: email ? 0 : 1,
            }}
            title={'Next'}
            onPress={handleEmailChange}
          />
        </AppView>
      </ScrollView>
    </AppGradientView>
  );
};

export default EmailVerification;

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
    fontSize: 15,
    fontWeight: '500',
    opacity: 0.6,
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
});
