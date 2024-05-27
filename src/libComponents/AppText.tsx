import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import React from 'react';
import appColors from '../utils/appColors';

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
  return (
    <Text
      {...restProp}
      style={[
        {
          fontSize: fontSize,
          color: false ? appColors.white : appColors.Black_color,
        },
        {...style},
      ]}>
      {children}
    </Text>
  );
};

export default AppText;
const styles = StyleSheet.create({});
