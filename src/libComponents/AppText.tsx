import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import React from 'react';
import appColors from '../utils/appColors';
import {useSelector} from 'react-redux';

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
  const isarkMode = useSelector<any>(state => state.auth.isDarkMode);
  return (
    <Text
      {...restProp}
      style={[
        {
          fontSize: fontSize,
          color: isarkMode ? appColors.white : appColors.Black_color,
        },
        {...style},
      ]}>
      {children}
    </Text>
  );
};

export default AppText;
