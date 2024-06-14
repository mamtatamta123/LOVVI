import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import appColors from '../../../utils/appColors';

const GalleryScreen = ({navigation}) => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <View>
      <AppStatusBar isDark={false} isbg={false} />
      {/* <AppHeader isBlack={true} isColor={true} /> */}
      <ImageBackground
        source={require('../../../assets/Images/women.png')}
        style={{height: '100%', width: '100%'}}>
        <View
          style={{
            height: 100,
            width: '100%',
            // backgroundColor: 'red',
            position: 'absolute',
            bottom: 10,
            borderWidth: 6,
            borderColor: appColors.white,
            borderRadius: 10,
            flexDirection: 'row',
            gap: 5,
          }}>
          {arr.map((i, index) => (
            <TouchableOpacity
            // onPress={(navigation.navigate())=>}
            >
              <Image
                source={require('../../../assets/Images/women.png')}
                style={{
                  height: 85,
                  width: 60,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

export default GalleryScreen;

const styles = StyleSheet.create({});
