import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import React from 'react';
import appColors from '../utils/appColors';
import {useTheme} from '@react-navigation/native';

interface AppTextProp extends TextProps {
  style: TextStyle;
  fontSize: number;
}

const AppText: React.FC<AppTextProp> = ({
  children,
  style,
  fontSize = 16,
  ...restProp
}) => {
  const {colors} = useTheme();
  return (
    <Text
      {...restProp}
      style={[
        {
          fontSize: fontSize,
          color: false ? appColors.white : appColors.Black_color,
          // color: colors.text,
        },
        {...style},
      ]}>
      {children}
    </Text>
  );
};

export default AppText;
const styles = StyleSheet.create({});
