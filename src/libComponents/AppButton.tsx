import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
  ActivityIndicator,
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
  titleStyle?: TextStyle;
  height?: 55;
  backgroundColor?: string;
  color?: string;
  loading?: boolean;
  loaderColor?: string;
}

const AppButton: React.FC<AppButtonProp> = ({
  title,
  style,
  titleStyle,
  backgroundColor,
  loading = false,
  color = 'black',
  loaderColor = appColors.Black_color,
  ...restProp
}) => {
  return (
    <TouchableOpacity
      {...restProp}
      style={[
        styles.buttonContainer,
        {backgroundColor: appColors.secondoryColor},
        {backgroundColor: backgroundColor || appColors.secondoryColor},
        style,
      ]}>
      {loading ? (
        <ActivityIndicator color={loaderColor} size={27} />
      ) : (
        <Text
          style={[styles.title, titleStyle, {color: color || appColors.BLACK}]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export default AppButton;

const styles = StyleSheet.create({
  title: {
    // color: color?appColors.IconColor.appColors.Black,
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
