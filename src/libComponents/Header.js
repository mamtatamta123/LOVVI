import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import appColors from '../utils/appColors';

const Header = () => {
  return <StatusBar backgroundColor={appColors.primaryColor} />;
};

export default Header;

const styles = StyleSheet.create({});