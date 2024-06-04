import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '../utils/appColors';
const {height, width} = Dimensions.get('window');

const TinderCard = ({item, swipe, isfirst, ...rest}) => {
  const transform = swipe.getTranslateTransform();
  const translateX = parseFloat(transform.translateX);
  return (
    <View
      style={{
        width: width - 20,
        height: height - 150,
        alignSelf: 'center',
        position: 'absolute',
        top: 50,
        // transform: [...swipe.getTranslateTransform()],
      }}>
      <Image
        source={item.image}
        style={{width: '100%', height: '100%', borderRadius: 20}}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.9)']}
        style={{width: '100%', height: '100%'}}>
        <Text
          style={{
            position: 'absolute',
            bottom: 20,
            left: 20,

            fontSize: 40,
          }}>
          {item.title}
        </Text>
      </LinearGradient>
    </View>
  );
};

export default TinderCard;

const styles = StyleSheet.create({});
