import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
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

const IdentityGender = ({navigation}) => {
  const [selectedGender, setSelectedGender] = useState('');
  const ScrollRef = useRef();

  const genderArr = [
    {name: 'Straight', value: 'straight'},
    {name: 'Gay', value: 'gay'},
    {name: 'Asexual', value: 'asexual'},
    {name: 'Lesbian', value: 'lesbian'},
    {name: 'Bisexual', value: 'bisexual'},
    {name: 'Demisexual', value: 'demisexual'},
    {name: 'Pansexual', value: 'pansexual'},
    {name: 'Queer', value: 'queer'},
    {name: 'Bicurious', value: 'bicurious'},
    {name: 'Aromantic', value: 'aromantic'},
  ];

  const scrollDown = () => {
    setTimeout(() => {
      console.log('hello');
      ScrollRef.current.scrollToEnd();
    }, 200);
  };

  return (
    <AppGradientView
      style={{height: '100%'}}
      colors={appColors.PrimaryGradient2}>
      <AppStatusBar />
      <AppHeader />
      <ScrollView
        ref={ScrollRef}
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>Your Sexual</Text>
          <Text style={styles.titleText}>Orientation?</Text>
        </View>

        <AppView style={styles.formContainer}>
          {genderArr.map((item, index) => (
            <AppButton
              titleStyle={{
                color:
                  item.value == selectedGender
                    ? appColors.white
                    : appColors.Black_color,
              }}
              onPress={() => {
                setSelectedGender(item.value), scrollDown();
              }}
              key={index}
              style={{
                marginTop: '8%',
                borderWidth: item.value == selectedGender ? 0 : 0.8,
                borderColor: appColors.DARK_GRAY,
                backgroundColor:
                  item.value == selectedGender ? appColors.primaryColor : null,
              }}
              title={item.name}
            />
          ))}

          <AppButton
            disabled={selectedGender ? false : true}
            style={{
              marginBottom: '3%',
              marginTop: '20%',
              backgroundColor: selectedGender
                ? appColors.secondoryColor
                : appColors.white,
              borderWidth: selectedGender ? 0 : 1,
            }}
            title={'Next'}
            onPress={() => navigation.navigate(routes.Interested_Gender)}
          />
        </AppView>
      </ScrollView>
    </AppGradientView>
  );
};

export default IdentityGender;

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
    backgroundColor: appColors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 2,
    marginTop: 10,
    paddingHorizontal: 20,
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
