import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveWidth as wp,
  responsiveFontSize as fp,
} from 'react-native-responsive-dimensions';
import appColors from '../../utils/appColors';
import AppButton from '../../libComponents/AppButton';
import AppText from '../../libComponents/AppText';
import {routes} from '../../utils/routes';
import AppStatusBar from '../../libComponents/AppStatusBar';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/Images/LovviBgImage.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <AppStatusBar />
      {/* <ScrollView contentContainerStyle={{flex: 1}}> */}
      <View style={{paddingHorizontal: 20}}>
        <Image
          source={require('../../assets/Images/mainHeading.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <AppText style={styles.heading}>Welcome Back</AppText>
          <AppText style={styles.text}>Start with Sign Up or Sign In</AppText>
        </View>
        <AppButton
          onPress={() => navigation.navigate(routes.Signup_Screen)}
          style={{marginTop: '15%', backgroundColor: appColors.white}}
          title={'Sign Up'}
        />
        <AppButton
          onPress={() => navigation.navigate(routes.Login_Screen)}
          style={{marginTop: '8%', borderWidth: 1, backgroundColor: null}}
          title={'Sign In'}
        />
      </View>
      {/* </ScrollView> */}
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  image: {
    width: '80%',
    height: '20%',
    alignSelf: 'center',
    marginVertical: '10%',
    // backgroundColor: 'red',
  },
  heading: {
    fontSize: fp(4.7),
    fontWeight: '900',
  },
  text: {
    fontSize: fp(2),
    fontWeight: '700',
    opacity: 0.8,
    marginTop: '3%',
  },
  textContainer: {
    marginTop: '50%',
    alignItems: 'center',
  },
});
