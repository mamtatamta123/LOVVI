import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import appColors from '../utils/appColors';
import AppIcon, {Icon} from './AppIcon';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const AppHeader = ({isBlack = false, isColor = false}) => {
  const isarkMode = useSelector(state => state.auth.isDarkMode);
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.buttonContainer}>
        <AppIcon
          Type={Icon.Ionicons}
          name={'chevron-back-outline'}
          color={isarkMode ? appColors.white : appColors.BLACK} // Fixed color logic
          size={29}
        />
      </TouchableOpacity>
      <Image
        source={
          isBlack
            ? isarkMode
              ? require('../assets/Images/mainHeading.png')
              : require('../assets/Images/Lovvi2.png')
            : require('../assets/Images/mainHeading.png')
        }
        style={styles.image}
      />
    </View>
  );
};

export default AppHeader;
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonContainer: {
    position: 'absolute',
    left: 15,
    width: 50,
    height: '100%',
    justifyContent: 'center',
  },
  image: {
    height: 40,
    width: '28%',
  },
});
