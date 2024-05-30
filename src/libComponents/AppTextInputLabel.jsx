import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {
  responsiveWidth as wp,
  responsiveFontSize as fp,
} from 'react-native-responsive-dimensions';
import appColors from '../utils/appColors';
import AppIcon, {Icon} from './AppIcon';

export const keyboardType = {
  email_address: 'email-address',
  number_pad: 'number-pad',
  default: 'default',
  url: 'url',
};

const AppTextInputLabel = ({
  value,
  placeholder,
  onChangeText,
  secureEntry = false,
  labelText = 'Enter label',
  IconType,
  Iconsize,
  Iconname,
  Iconcolor,
  style,
  secureTextEntry,
  onPress,
  keyboardType,
  borderRadius = wp(3),
  editable = true,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.labelText}>{labelText}</Text>
      <View style={[styles.inputContainer, {borderRadius: borderRadius}]}>
        <AppIcon
          Type={IconType}
          name={Iconname}
          size={Iconsize}
          color={Iconcolor}
          style={styles.icon}
        />
        <TextInput
          editable={editable}
          keyboardType={keyboardType}
          // keyboardType="number-pad"
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor={appColors.DARK_GRAY}
          secureTextEntry={secureTextEntry}
          style={styles.input}
        />
        {secureEntry && (
          <TouchableOpacity onPress={onPress} style={styles.eyeIconContainer}>
            <AppIcon
              Type={Icon.Ionicons}
              name={!secureTextEntry ? 'eye-outline' : 'eye-off-outline'}
              size={wp(5)}
              color={appColors.IconColor}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AppTextInputLabel;

const styles = StyleSheet.create({
  container: {},
  labelText: {
    fontSize: fp(1.8),
    color: appColors.BLACK,
    fontWeight: '600',
    marginBottom: 3,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: appColors.TextInput_BgColor,
    marginTop: wp(1),
    // width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appColors.TextInput_BgColor,
  },
  icon: {
    marginRight: wp(2),
    marginLeft: wp(4),
  },
  lineImage: {
    marginHorizontal: wp(1),
  },
  input: {
    flex: 1,
    fontSize: fp(1.8),
    alignSelf: 'center',
    color: appColors.BLACK,
  },
  eyeIconContainer: {
    marginHorizontal: wp(2),
  },
});
