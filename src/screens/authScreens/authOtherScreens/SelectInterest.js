import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppHeader from '../../../libComponents/AppHeader';
import AppGradientView from '../../../libComponents/AppGradientView';
import AppView from '../../../libComponents/AppView';
import appColors from '../../../utils/appColors';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import AppText from '../../../libComponents/AppText';
import AppButton from '../../../libComponents/AppButton';
import {NavigationContainer} from '@react-navigation/native';
import {routes} from '../../../utils/routes';

const SelectInterest = ({navigation}) => {
  const interestArr = [
    {
      IconType: Icon.Entypo,
      IconName: 'game-controller',
      title: 'Gaming',
    },

    {
      IconType: Icon.FontAwesome6,
      IconName: 'headphones',
      title: 'Musics',
    },

    {
      IconType: Icon.FontAwesome,
      IconName: 'book',
      title: 'Language',
    },

    {
      IconType: Icon.MaterialCommunityIcons,
      IconName: 'google-translate',
      title: 'hloo',
    },
    {
      IconType: Icon.AntDesign,
      IconName: 'camera',
      title: 'Photography',
    },
    {
      IconType: Icon.Ionicons,
      IconName: 'shirt',
      title: 'Fashion',
    },
    {
      IconType: Icon.Entypo,
      IconName: 'leaf',
      title: 'Nature',
    },

    {
      IconType: Icon.FontAwesome5,
      IconName: 'dumbbell',
      title: 'Gym',
    },
    {
      IconType: Icon.MaterialIcons,
      IconName: 'pets',
      title: 'Animal',
    },
    {
      IconType: Icon.FontAwesome5,
      IconName: 'lightbulb',
      title: 'Technology',
    },
    {
      IconType: Icon.FontAwesome5,
      IconName: 'business-time',
      title: 'Business',
    },
    {
      IconType: Icon.MaterialIcons,
      IconName: 'payments',
      title: 'hloo',
    },
    {
      IconType: Icon.MaterialIcons,
      IconName: 'flight',
      title: 'hloo',
    },
    {
      IconType: Icon.FontAwesome6,
      IconName: 'car-rear',
      title: 'hloo',
    },

    {
      IconType: Icon.FontAwesome5,
      IconName: 'dumbbell',
      title: 'hloo',
    },
    {
      IconType: Icon.MaterialIcons,
      IconName: 'pets',
      title: 'hloo',
    },
    {
      IconType: Icon.FontAwesome5,
      IconName: 'lightbulb',
      title: 'hloo',
    },
    {
      IconType: Icon.FontAwesome5,
      IconName: 'business-time',
      title: 'hloo',
    },
    {
      IconType: Icon.MaterialIcons,
      IconName: 'payments',
      title: 'hloo',
    },
    {
      IconType: Icon.MaterialIcons,
      IconName: 'flight',
      title: 'hloo',
    },
    {
      IconType: Icon.FontAwesome6,
      IconName: 'car-rear',
      title: 'hloo',
    },
  ];

  return (
    <View style={{backgroundColor: 'white', flex: 1, marginHorizontal: 15}}>
      <AppText style={{fontWeight: 'bold', marginTop: 50}}>
        Select up to 10 interests
      </AppText>
      <AppText
        style={{
          fontWeight: 'bold',
          color: appColors.Black_color,
          fontSize: 15,
          fontWeight: '500',
          opacity: 0.6,
        }}>
        Discover Meaningful Connections by Selecting Your Interests
      </AppText>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 20,
          paddingVertical: 15,
          justifyContent: 'space-between',
          //   marginBottom: 5,
          //   marginTop: 5,
        }}>
        {interestArr.map((item, index) => (
          <TouchableOpacity
            style={{
              height: 40,
              //   width: '27%',
              // padding:10,
              paddingHorizontal: 10,
              backgroundColor: appColors.TextInput_BgColor,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 5,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: appColors.DARK_GRAY,
                fontSize: 13,
                marginRight: 5,
              }}>
              {item.title}
            </Text>
            <AppIcon
              Type={item.IconType}
              name={item.IconName}
              color={appColors.DARK_GRAY}
              size={16}
            />
          </TouchableOpacity>
        ))}
      </View>

      <AppButton
        title="Next"
        style={{marginTop: '20%'}}
        onPress={() => navigation.navigate(routes.Upload_Photos)}
      />
    </View>
  );
};

export default SelectInterest;

const styles = StyleSheet.create({});
