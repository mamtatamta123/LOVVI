import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
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

const SchoolScreen = ({navigation}) => {
  const [school, setSchool] = useState('');

  return (
    <AppGradientView
      style={{height: '100%'}}
      colors={appColors.PrimaryGradient2}>
      <AppStatusBar />
      <AppHeader />
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>If Studying is</Text>
          <Text style={styles.titleText}>your thing...</Text>
        </View>

        <AppView style={styles.formContainer}>
          <AppTextInputLabel
            labelText="Enter school name, past or current"
            value={school}
            placeholder=" Enter school name, past or current"
            onChangeText={text => setSchool(text)}
            style={{marginTop: 20}}
          />

          <AppText style={styles.subtitleText}>
            This is how it’ll appear on your profile.
          </AppText>

          <AppButton
            disabled={school ? false : true}
            style={{
              marginTop: '20%',
              backgroundColor: school
                ? appColors.secondoryColor
                : appColors.white,
              borderWidth: school ? 0 : 1,
            }}
            title={'Next'}
            onPress={() => navigation.navigate(routes.Select_Interest)}
          />
        </AppView>
      </ScrollView>
    </AppGradientView>
  );
};

export default SchoolScreen;

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
    // color: appColors.Black_color,
    fontSize: 13,
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
