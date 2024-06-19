import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import appColors from '../utils/appColors';

interface customAppViewProp extends ViewProps {
  style?: ViewStyle;
}
const AppView: React.FC<customAppViewProp> = ({
  children,
  style,
  ...restProp
}) => {
  const isarkMode = useSelector<any>(state => state.auth.isDarkMode);
  console.log(isarkMode, 'uday');
  return (
    <View
      {...restProp}
      style={[
        {
          flex: 1,
          backgroundColor: isarkMode ? appColors.Black_color : appColors.white,
        },
        {...style},
      ]}>
      {children}
    </View>
  );
};
export default AppView;
