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

const HouseRules = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState();

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
          <Text style={styles.titleText}>Welcome to</Text>
          <Text style={styles.titleText}>Lovvi</Text>

          <Text style={styles.subtitleText}>
            Please follow these house rules
          </Text>
        </View>

        <AppView style={styles.formContainer}>
          <AppText style={styles.labelText}>Be yourself</AppText>

          <AppText style={styles.Sublabel}>
            Make sure your photos, age and bio are true to who you are.
          </AppText>
          <AppText style={styles.labelText}>Stay safe.</AppText>

<AppText style={styles.Sublabel}>
Don't be too quick to give out personal information. Date Safely
</AppText>
 <AppText style={styles.labelText}>Play  it cool.</AppText>

<AppText style={styles.Sublabel}>
Respect others and treat them as you would like to be treated.
</AppText>
 <AppText style={styles.labelText}>Be proactive.</AppText>

<AppText style={styles.Sublabel}>
Always report bad behaviour
</AppText>




          <AppButton
            style={{marginTop: '50%'}}
            title={'I agree'}
            onPress={() => navigation.navigate(routes.Name_Screen)}
          />
        </AppView>
      </ScrollView>
    </AppGradientView>
  );
};

export default HouseRules;

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
  labelText: {
    fontSize: fp(2),
    color: appColors.BLACK,
    fontWeight: '600',
    marginTop: 20,
  },

  Sublabel: {
    color: appColors.Black_color,
    fontSize: 12,
    fontWeight: '500',
    opacity: 0.6,
    width: '100%',
  },
});
