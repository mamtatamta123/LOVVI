import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
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
import {Screen} from 'react-native-screens';

const CardScreen = ({navigation}) => {

  const [selectcard,setselectcard]=useState('true')
  const [borderselect,setborderselect]=useState('true')

  const cardArr = [
    {
      image: require('../../../assets/Images/Heart.png'),
      title: 'Long-term Partner',
      Screen: routes.Card_Screen,
    },
    {
      image: require('../../../assets/Images/Love.png'),
      title: 'Long-term, but short-term Ok',
      Screen: routes.Card_Screen,
    },
    {
      image: require('../../../assets/Images/champagne.png'),
      title: 'Long-term, but short-term Ok',
      Screen: routes.Card_Screen,
    },
  
    {
      image: require('../../../assets/Images/confetti.png'),
      title: 'Short-term Partner',
      Screen: routes.Card_Screen,
    },
    {
      image: require('../../../assets/Images/bye.png'),
      title: 'New friends',
      Screen: routes.Card_Screen,
    },
    {
      image: require('../../../assets/Images/thinking.png'),
      title: 'Still figuring it out',
      Screen: routes.Card_Screen,
    },

  ];

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
          <Text style={styles.titleText}>Who are you</Text>
          <Text style={styles.titleText}>looking for?</Text>
          <AppText style={styles.subtitleText}>
            All good if it changes. There's something for everyone
          </AppText>
        </View>

        <AppView style={styles.formContainer}>

         
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 6,
                paddingVertical: 10,
                justifyContent: 'space-between',
                // marginBottom: 5,
                // marginTop: ,
                // marginHorizontal:10
              }}>
               {cardArr.map((item, index) => (
              <TouchableOpacity
                style={{
                  height: 132,
                  width: '32%',
                  backgroundColor: appColors.TextInput_BgColor,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation:5,
               marginTop:10
                
                }}>

                <Image source={item.image}  style={{height:40,width:40}}/>
                
                <AppText style={{fontSize: 12,}}>{item.title}</AppText>
              </TouchableOpacity>
            ))}
            </View>
       

          <AppButton
            style={{marginBottom: '3%', marginTop: '20%'}}
            title={'Next'}
            onPress={() => navigation.navigate(routes.Distance_Range_Screen)}
          />
        </AppView>
      </ScrollView>
    </AppGradientView>
  );
};

export default CardScreen;

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
});
