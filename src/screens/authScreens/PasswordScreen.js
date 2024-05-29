import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import appColors from '../../utils/appColors';
import {
  responsiveWidth as wp,
  responsiveFontSize as fp,
} from 'react-native-responsive-dimensions';
import AppTextInputLabel, {
  keyboardType,
} from '../../libComponents/AppTextInputLabel';
import AppButton from '../../libComponents/AppButton';
import {Icon} from '../../libComponents/AppIcon';
import AppGradientView from '../../libComponents/AppGradientView';
import AppStatusBar from '../../libComponents/AppStatusBar';
import AppHeader from '../../libComponents/AppHeader';
import AppView from '../../libComponents/AppView';
import AppText from '../../libComponents/AppText';
import {routes} from '../../utils/routes';

const PasswordScreen = ({navigation}) => {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);


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
          <Text style={styles.titleText}>New
</Text>
<Text style={styles.titleText}>
Password</Text>
          <Text style={styles.subtitleText}>Your new password must be unique 
from those
previously used.
</Text>
        </View>

        <AppView style={styles.formContainer}>
        <AppTextInputLabel
            keyboardType={'email-address'}
            labelText="Password"
            value={password}
            placeholder="Enter Your Password"
            onChangeText={text => setPassword(text)}
            IconType={Icon.Fontisto}
            Iconsize={20}
            Iconname={'locked'}
            Iconcolor={appColors.IconColor}
            style={styles.input}
            secureEntry={true}
                secureTextEntry={showPassword}
                onPress={() => setShowPassword(!showPassword)}
          />
          <AppTextInputLabel
            keyboardType={'email-address'}
            labelText="Confirm Password"
            value={confirmPassword}
            placeholder="Enter Your Password"
            onChangeText={text => setConfirmPassword(text)}
            IconType={Icon.Fontisto}
            Iconsize={20}
            Iconname={'locked'}
            Iconcolor={appColors.IconColor}
            style={styles.input}
            secureEntry={true}
                secureTextEntry={showPassword}
                onPress={() => setShowPassword(!showPassword)}
          />
        

          <AppButton
            style={{marginBottom: '10%', marginTop: '20%'}}
            title={' Create New Password'}
            onPress={()=>navigation.navigate(routes.GetNumber_Screen)}
          />

        </AppView>
      </ScrollView>
    </AppGradientView>
  );
};

export default PasswordScreen;

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
    width:'78%'
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
});
