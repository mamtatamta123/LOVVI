import {StyleSheet, Text, Image, View} from 'react-native';
import React, {useEffect} from 'react';
import AppGradientView from '../../libComponents/AppGradientView';
import AppStatusBar from '../../libComponents/AppStatusBar';
import {red} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import {routes} from '../../utils/routes';


const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(routes.Welcome_Screen);
    }, 1000);
  }, []);

  return (
    <AppGradientView style={styles.gradientStyle}>
      <AppStatusBar />
      <Image
        source={require('../../assets/Images/mainHeading.png')}
        style={styles.image}
      />
    </AppGradientView>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  image: {width: '50%', height: '9%'},
  gradientStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
