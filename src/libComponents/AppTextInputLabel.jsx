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
import {useSelector} from 'react-redux';
import {isDate} from 'moment';

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
  labelText = false,
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
  autoFocus = false,
  validationError = '',
  maxLength,
  line = false,
  icon = false,
}) => {
  const isarkMode = useSelector(state => state.auth.isDarkMode);
  return (
    <View style={[styles.container, style]}>
      <Text
        style={[
          styles.labelText,
          {color: isarkMode ? appColors.white : appColors.Black_color},
        ]}>
        {labelText}
      </Text>
      <View style={[styles.inputContainer, {borderRadius: borderRadius}]}>
        {/* <AppIcon
          Type={IconType}
          name={Iconname}
          size={Iconsize}
          color={Iconcolor}
          style={styles.icon}
        /> */}
        {/* {line && (
          <View
            style={{
              borderLeftWidth: 0.6,
              borderColor: appColors.DARK_GRAY,
              height: '50%',
            }}></View>
        )} */}
        <TextInput
          maxLength={maxLength}
          autoFocus={autoFocus}
          editable={editable}
          keyboardType={keyboardType}
          // keyboardType="number-pad"
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor={appColors.DARK_GRAY}
          secureTextEntry={secureTextEntry}
          style={[
            styles.input,
            {
              color: isarkMode ? appColors.white : appColors.Black_color,
              backgroundColor: isarkMode ? '#474747' : appColors.grayShade,
            },
          ]}
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
      {validationError && (
        <Text style={{fontSize: 12, color: appColors.red}}>
          {validationError}
        </Text>
      )}
    </View>
  );
};

export default AppTextInputLabel;

const styles = StyleSheet.create({
  // container: {height: 100, backgroundColor: 'red'},
  labelText: {
    fontSize: fp(1.8),
    // color: appColors.BLACK,
    fontWeight: '600',
    marginBottom: 3,
    // backgroundColor: 'red',
  },
  inputContainer: {
    // borderWidth: 1,
    borderColor: appColors.TextInput_BgColor,
    marginTop: wp(1),
    // width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appColors.TextInput_BgColor,
    gap: 5,
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
    borderRadius: wp(3),
    paddingHorizontal: 15,
  },
  eyeIconContainer: {
    marginHorizontal: wp(2),
  },
});
