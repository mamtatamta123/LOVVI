import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppHeader from '../../../libComponents/AppHeader';
import AppView from '../../../libComponents/AppView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppText from '../../../libComponents/AppText';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import {routes} from '../../../utils/routes';
import appColors from '../../../utils/appColors';
import {useSelector} from 'react-redux';

const ProfileMenuButton = ({iconType, iconSize, iconName, title, onPress}) => {
  const isarkMode = useSelector(state => state.auth.isDarkMode);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 15,
        paddingVertical: 13,
        borderBottomWidth: 1,
        borderBottomColor: appColors.IconColor,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: 30}}>
          <AppIcon
            Type={iconType}
            name={iconName}
            size={iconSize}
            color={appColors.primaryColor}
          />
        </View>
        <Text style={{color: isarkMode ? appColors.white : appColors.BLACK}}>
          {title}
        </Text>
      </View>
      <AppIcon
        Type={Icon.Feather}
        name={'chevron-right'}
        size={19}
        color={appColors.BLACK}
      />
    </TouchableOpacity>
  );
};

const SettingsScreen = ({navigation}) => {
  return (
    <AppView>
      <AppStatusBar isDark={false} isbg={false} />
      <AppHeader isBlack={true} isColor={true} />
      <View style={{marginHorizontal: 15}}>
        <AppText style={styles.title}>Settings</AppText>
      </View>

      <ProfileMenuButton
        iconType={Icon.Ionicons}
        iconName={'settings'}
        iconSize={20}
        title={'Settings'}
        onPress={() => navigation.navigate(routes.All_Settings)}
      />
      <ProfileMenuButton
        iconType={Icon.Ionicons}
        iconName={'person-sharp'}
        iconSize={20}
        title={'Personal Information'}
      />

      <ProfileMenuButton
        iconType={Icon.Ionicons}
        iconName={'notifications'}
        iconSize={23}
        title={'Push Notifications Settings'}
      />

      <ProfileMenuButton
        iconType={Icon.Foundation}
        iconName={'unlock'}
        iconSize={20}
        title={'Password Manager '}
      />
    </AppView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
});
