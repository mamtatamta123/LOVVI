import {
  StyleSheet,
  Text,
  View,
  
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import appColors from '../../../utils/appColors';
import {
  responsiveWidth as wp,
  responsiveFontSize as fp,
  responsiveHeight as hp,
} from 'react-native-responsive-dimensions';
import AppTextInputLabel, {
  keyboardType,
} from '../../../libComponents/AppTextInputLabel';
import AppButton from '../../../libComponents/AppButton';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import AppGradientView from '../../../libComponents/AppGradientView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppView from '../../../libComponents/AppView';
import AppText from '../../../libComponents/AppText';
import {routes} from '../../../utils/routes';
import CheckBox from '@react-native-community/checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';
import moments from 'moment';

const DatePickrScreen = ({navigation}) => {
  const [dateofbirth, setDateOfBirth] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const handleDOBDateChange = (event, selectedDate) => {
    const formattedDate = moments(selectedDate).format('YYYY-MM-DD');
    setShowDatePicker(false);
    setDateOfBirth(formattedDate.toString());
  };

  return (
    <AppGradientView
      style={{height: '100%'}}
      colors={appColors.PrimaryGradient2}>
      <AppStatusBar />
      <AppHeader />

      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>Your</Text>
        <Text style={styles.titleText}>Birthday?</Text>
      </View>

      <AppView style={styles.formContainer}>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={styles.dateContainer}>
          <View style={styles.dateIcon}>
            <AppIcon
              Type={Icon.Fontisto}
              name={'date'}
              color={appColors.DARK_GRAY}
              size={20}
            />
          </View>
          <TextInput
            value={dateofbirth}
            editable={false}
            placeholder="dd-mm-yyyy"
            placeholderTextColor={appColors.BLACK}
            style={styles.dateInput}
          />
          {showDatePicker && (
            <DateTimePicker
              value={new Date()}
              mode="date"
              dateFormat="YYYY-MM-DD"
              display="default"
              onChange={handleDOBDateChange}
              maximumDate={new Date()}
              onCancel={() => setShowDatePicker(false)}
            />
          )}
        </TouchableOpacity>

        <AppText style={{fontSize: 13, width: '100%', marginTop: 5}}>
          Your profile shows your age, not your date of birth.
        </AppText>

        <AppButton
          style={{marginBottom: '3%', marginTop: '20%'}}
          title={'Next'}
          onPress={() => navigation.navigate(routes.Gender_Screen)}
        />
      </AppView>
    </AppGradientView>
  );
};

export default DatePickrScreen;

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
  dateContainer: {
    height: 50,
    width: '100%',
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 3,
    borderColor: '#D9D9D9',
    gap: 5,
  },
  dateIcon: {
    paddingLeft: 15,
  },
  dateInput: {
    flex: 1,
    fontSize: 15,
    color: appColors.BLACK,
    zIndex: -1,
  },
});
