import {View, Text} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import appColors from '../utils/appColors';

const Loader = ({}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.white,
        // marginBottom: marginBottom,
        // paddingBottom: paddingBottom,
      }}>
      <LottieView
        style={{height: 200, width: 200}}
        source={require('../assets/animations/loader.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loader;
