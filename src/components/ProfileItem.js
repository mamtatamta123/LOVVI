import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import appColors from '../utils/appColors';
import AppIcon from '../libComponents/AppIcon';

const ProfileItem = ({
  type,
  style,
  name,
  color,
  size,
  title,
  backgroundColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          width: '100%',
          borderRadius: 10,
          borderColor: 'black',
          flexDirection: 'row',
          marginTop: 12,
        
          height: 45,
        
          alignItems: 'center',
          paddingHorizontal: 15,
         
          backgroundColor: backgroundColor,
        },

        {...style},
      ]}>
      <AppIcon
        Type={type}
        name={name}
        color={color}
        size={size} />
      <Text style={{color: appColors.BLACK, marginLeft: 10}}>{title} </Text>
    </TouchableOpacity>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({});
