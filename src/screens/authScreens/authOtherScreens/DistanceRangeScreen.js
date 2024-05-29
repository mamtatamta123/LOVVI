import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  
} from 'react-native';
import React, {useCallback, useState} from 'react';
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
import RangeSlider from 'rn-range-slider';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
const DistanceRangeScreen = ({navigation}) => {
 
    const [range, setRange] = useState([0, 100]);
    const [prigeRange, setPriceRange] = useState([]);


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
          <Text style={styles.titleText}>Your Distance</Text>
          <Text style={styles.titleText}>Preference?</Text>

          <Text style={styles.subtitleText}>
            Use the slider to set the maximum distance you would like potential
            matches to be located.
          </Text>
        </View>

        <AppView style={styles.formContainer}>
          <AppText style={styles.labelText}>Distance Preference?</AppText>
         
          <MultiSlider
                      values={[0, 1000]}
                      onValuesChangeFinish={val => setPriceRange(val)}
                    />

          <AppButton
            style={{marginTop: '50%'}}
            title={'Next'}
            onPress={() => navigation.navigate(routes.School_Screen)}
          />
        </AppView>
      </ScrollView>
    </AppGradientView>
  );
};

export default DistanceRangeScreen;

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
    labelText: {
      fontSize: fp(2),
      color: appColors.BLACK,
      fontWeight: '600',
      marginTop: 20,
    },
  },
});
