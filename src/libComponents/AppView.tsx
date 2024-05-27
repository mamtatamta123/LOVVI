import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import React from 'react';

interface customAppViewProp extends ViewProps {
  style?: ViewStyle;
}
const AppView: React.FC<customAppViewProp> = ({
  children,
  style,
  ...restProp
}) => {
  return (
    <View {...restProp} style={[{flex: 1}, {...style}]}>
      {children}
    </View>
  );
};
export default AppView;
