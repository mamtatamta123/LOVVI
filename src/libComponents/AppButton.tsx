import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import appColors from '../utils/appColors';
import {
  responsiveWidth as wp,
  responsiveFontSize as fp,
} from 'react-native-responsive-dimensions';

interface AppButtonProp extends TouchableOpacityProps {
  title?: string;
  style?: ViewStyle;
  height?:55
}

const AppButton: React.FC<AppButtonProp> = ({title, style, ...restProp}) => {
  return (
    <TouchableOpacity
      {...restProp}
      style={[
        styles.buttonContainer,
        {backgroundColor: appColors.secondoryColor},
        style,
      ]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
export default AppButton;

const styles = StyleSheet.create({
  title: {
    color: appColors.BLACK,
    fontSize: 17.5,
    fontWeight: 'bold',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: wp(2.5),
  },
});
