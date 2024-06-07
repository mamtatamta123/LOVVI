import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Share,
} from 'react-native';
import React from 'react';
import AppHeader from '../../../libComponents/AppHeader';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import appColors from '../../../utils/appColors';
import AppText from '../../../libComponents/AppText';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import {routes} from '../../../utils/routes';

const EditProfile = ({navigation}) => {
  return (
    <View style={{backgroundColor: appColors.white, flex: 1}}>
      <AppStatusBar isDark={false} isbg={false} />
      <AppHeader isBlack={true} isColor={true} />
      <AppText
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          marginHorizontal: 15,
          marginTop: 30,
        }}>
        Jennifer
      </AppText>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
