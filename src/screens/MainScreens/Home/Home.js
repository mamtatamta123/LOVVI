import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  PanResponder,
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
import IdentityGender from '../../authScreens/authOtherScreens/IdentityGender';
import TinderCard from '../../../components/TinderCard';

const Home = ({navigation}) => {
  const [data, setData] = useState([
    {image: require('../../../assets/Images/women.png'), id: 1, title: 'hlo'},
    {
      image: require('../../../assets/Images/women.png'),
      id: 2,
      title: 'hello',
    },
    {
      image: require('../../../assets/Images/women.png'),
      id: 3,
      title: 'world',
    },
    {
      image: require('../../../assets/Images/women.png'),
      id: 4,
      title: 'example',
    },
    {
      image: require('../../../assets/Images/women.png'),
      id: 5,
      title: 'sample',
    },
    {image: require('../../../assets/Images/women.png'), id: 6, title: 'test'},
    {image: require('../../../assets/Images/women.png'), id: 7, title: 'data'},
    {image: require('../../../assets/Images/women.png'), id: 8, title: 'code'},
    {
      image: require('../../../assets/Images/women.png'),
      id: 9,
      title: 'programming',
    },
    {
      image: require('../../../assets/Images/man.png'),
      id: 10,
      title: 'developer',
    },
  ]);
  const swipe = useRef(new Animated.ValueXY()).current;
  const PanResponderInstance = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dx, dy}) => {
      console.log('dx:' + dx + 'dy:', dy);
      swipe.setValue({x: dx, y: dy});
    },
    onPanResponderRelease: (_, {dx, dy}) => {
      console.log('released: dx+' + dy + ' dy:', dy);
    },
  });
  return (
    <AppGradientView
      style={{height: '100%'}}
      colors={appColors.PrimaryGradient2}>
      <AppStatusBar />
      <AppHeader />
      <Animated.View style={styles.container}>
        {data
          .map((item, index) => {
            const isfirst = index === 0;
            const dragHandlers = isfirst ? PanResponder.panHandlers : {};
            return (
              <TinderCard
                key={index}
                item={item}
                isfirst={isfirst}
                swipe={swipe}
                {...dragHandlers}
              />
            );
          })
          .reverse()}
      </Animated.View>
    </AppGradientView>
  );
};

export default Home;

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
