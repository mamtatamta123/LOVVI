import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import appColors from '../utils/appColors';

const Loader = ({}) => {
  return (
    <View style={styles.loaderStyle}>
      <View style={styles.mainLoader}>
        <LottieView
          style={{height: 200, width: 200}}
          source={require('../assets/animations/loader.json')}
          autoPlay
          loop
        />
      </View>
    </View>
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: appColors.white,
    //     // marginBottom: marginBottom,
    //     // paddingBottom: paddingBottom,
    //   }}>
    //   <LottieView
    //     style={{height: 200, width: 200}}
    //     source={require('../assets/animations/loader.json')}
    //     autoPlay
    //     loop
    //   />
    // </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderStyle: {
    position: 'absolute',
    width: '100%',
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    zIndex: 99,
    alignItems: 'center',
    opacity: 0.8,
    backgroundColor: '#000',
  },
  mainLoader: {
    zIndex: 9999,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    padding: 10,
    width: Dimensions.get('window').width / 1.5,
    borderRadius: 5,
  },
});
