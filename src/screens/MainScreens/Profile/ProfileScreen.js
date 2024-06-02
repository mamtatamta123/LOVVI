import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AppHeader from '../../../libComponents/AppHeader';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import appColors from '../../../utils/appColors';
import AppText from '../../../libComponents/AppText';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';

const ProfileScreen = () => {
  return (
    <View style={{backgroundColor: appColors.white, flex: 1}}>
      <AppStatusBar isDark={false} isbg={false} />
      <AppHeader isBlack={true} isColor={true} />

      <AppText style={{fontWeight: 'bold', fontSize: 25}}>Profile</AppText>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            height: 150,
            width: 150,

            borderRadius: 50,
            position: 'relative',
          }}>
          <Image
            source={require('../../../assets/Images/profile.png')}
            style={{height: 150, width: 150}}
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
      </View>
      <View style={{paddingHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AppIcon Type={Icon.Ionicons} name={'person-sharp'} size={13} />
            <Text
              style={{
                color: appColors.BLACK,
                fontWeight: '500',
                paddingHorizontal: 10,
              }}>
              Your Profile
            </Text>
          </View>

          <AppIcon
            Type={Icon.Feather}
            name={'chevron-right'}
            size={19}
            color={appColors.BLACK}
          />
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: appColors.TextInput_BgColor,
        }}></View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 30,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AppIcon Type={Icon.Ionicons} name={'person-sharp'} size={13} />
          <Text
            style={{
              color: appColors.BLACK,
              fontWeight: '500',
              paddingHorizontal: 10,
            }}>
            Your Profile
          </Text>
        </View>

        <AppIcon
          Type={Icon.Feather}
          name={'chevron-right'}
          size={19}
          color={appColors.BLACK}
        />
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: appColors.TextInput_BgColor,
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 30,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AppIcon Type={Icon.Ionicons} name={'person-sharp'} size={13} />
          <Text
            style={{
              color: appColors.BLACK,
              fontWeight: '500',
              paddingHorizontal: 10,
            }}>
            Your Profile
          </Text>
        </View>

        <AppIcon
          Type={Icon.Feather}
          name={'chevron-right'}
          size={19}
          color={appColors.BLACK}
        />
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: appColors.TextInput_BgColor,
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 30,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AppIcon Type={Icon.Ionicons} name={'person-sharp'} size={13} />
          <Text
            style={{
              color: appColors.BLACK,
              fontWeight: '500',
              paddingHorizontal: 10,
            }}>
            Your Profile
          </Text>
        </View>

        <AppIcon
          Type={Icon.Feather}
          name={'chevron-right'}
          size={19}
          color={appColors.BLACK}
        />
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: appColors.TextInput_BgColor,
        }}></View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
