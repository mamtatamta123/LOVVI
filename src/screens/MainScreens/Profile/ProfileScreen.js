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

const ProfileMenuButton = ({iconType, iconSize, iconName, title, onPress}) => {
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
        <Text style={{color: appColors.BLACK}}>{title}</Text>
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

const ProfileScreen = ({navigation}) => {
  const share = async () => {
    try {
      const title = 'Checkout this awesome app 🔥🔥';
      const url = 'https://www.google.co.in/';
      const message = `${title}\n${url}`;
      await Share.share({
        message: message,
      });
    } catch (error) {
      console.log(error);
    }
  };
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
        Profile
      </AppText>
      <View style={{alignItems: 'center', marginBottom: '7%'}}>
        <View
          style={{
            height: 120,
            width: 120,

            borderRadius: 50,
            position: 'relative',
          }}>
          <Image
            source={require('../../../assets/Images/profile.png')}
            style={{height: 120, width: 120}}
          />

          <View
            style={{
              backgroundColor: appColors.secondoryColor,
              height: 30,
              width: 30,
              position: 'absolute',
              bottom: 6,
              right: 6,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AppIcon
              Type={Icon.Entypo}
              name={'pencil'}
              color={appColors.BLACK}
              size={20}
            />
          </View>
        </View>
        <AppText
          style={{
            fontWeight: '500',
            fontSize: 20,
            marginHorizontal: 15,
            marginTop: 5,
            color: appColors.Black_color,
          }}>
          Mamta
        </AppText>
      </View>

      <ProfileMenuButton
        iconType={Icon.Ionicons}
        iconName={'person-sharp'}
        iconSize={20}
        title={'Your Profile'}
      />
      <ProfileMenuButton
        iconType={Icon.Ionicons}
        iconName={'settings'}
        iconSize={20}
        title={'Settings'}
      />

      <ProfileMenuButton
        iconType={Icon.Foundation}
        iconName={'info'}
        iconSize={23}
        title={'Help Centre'}
      />

      <ProfileMenuButton
        iconType={Icon.MaterialIcons}
        iconName={'person-add-alt-1'}
        iconSize={22}
        title={'Invite Friends'}
        onPress={share}
      />

      <ProfileMenuButton
        iconType={Icon.MaterialIcons}
        iconName={'privacy-tip'}
        iconSize={20}
        title={'Privacy Policy'}
        onPress={() => navigation.navigate(routes.Privacy_Policy)}
      />

      <ProfileMenuButton
        iconType={Icon.MaterialIcons}
        iconName={'logout'}
        iconSize={20}
        title={'Log Out'}
        onPress={() => {}}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
