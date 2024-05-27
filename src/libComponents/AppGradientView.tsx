import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '../utils/appColors';

interface customAppGradientProp extends ViewProps {
  style?: ViewStyle;
  colors: any;
}
const AppGradientView: React.FC<customAppGradientProp> = ({
  children,
  style,
  colors = appColors.PrimaryGradient,
}) => {
  return (
    <LinearGradient colors={colors} style={[{flex: 1}, style]}>
      {children}
    </LinearGradient>
  );
};

export default AppGradientView;
