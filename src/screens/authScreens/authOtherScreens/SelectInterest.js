import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import AppHeader from '../../../libComponents/AppHeader';
import AppView from '../../../libComponents/AppView';
import appColors from '../../../utils/appColors';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import AppText from '../../../libComponents/AppText';
import AppButton from '../../../libComponents/AppButton';
import {routes} from '../../../utils/routes';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ErrorToast} from '../../../utils/Toasters';

const SelectInterest = ({navigation}) => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleSelect = item => {
    if (selectedInterests.length >= 10) {
      ErrorToast('You can only select upto 10 interests');
      return;
    }
    if (selectedInterests.some(val => val.id === item.id)) {
      console.log('------------Unselect-----------------');
      setSelectedInterests(
        selectedInterests.filter(interest => interest.id !== item.id),
      );
    } else {
      console.log('------------select-----------------');
      setSelectedInterests([...selectedInterests, item]);
    }
  };

  const interestArr = [
    {
      id: 1,
      IconType: Icon.Entypo,
      IconName: 'game-controller',
      title: 'Gaming',
    },
    {
      id: 2,
      IconType: Icon.FontAwesome6,
      IconName: 'headphones',
      title: 'Musics',
    },
    {
      id: 3,
      IconType: Icon.FontAwesome,
      IconName: 'book',
      title: 'Language',
    },
    {
      id: 4,
      IconType: Icon.MaterialCommunityIcons,
      IconName: 'google-translate',
      title: 'language',
    },
    {
      id: 5,
      IconType: Icon.AntDesign,
      IconName: 'camera',
      title: 'Photography',
    },
    {
      id: 6,
      IconType: Icon.Ionicons,
      IconName: 'shirt',
      title: 'Fashion',
    },
    {
      id: 7,
      IconType: Icon.Entypo,
      IconName: 'leaf',
      title: 'Nature',
    },
    {
      id: 8,
      IconType: Icon.FontAwesome5,
      IconName: 'dumbbell',
      title: 'Gym',
    },
    {
      id: 9,
      IconType: Icon.MaterialIcons,
      IconName: 'pets',
      title: 'Animal',
    },
    {
      id: 10,
      IconType: Icon.FontAwesome5,
      IconName: 'lightbulb',
      title: 'Technology',
    },
    {
      id: 11,
      IconType: Icon.FontAwesome5,
      IconName: 'business-time',
      title: 'Business',
    },
    {
      id: 12,
      IconType: Icon.MaterialCommunityIcons,
      IconName: 'google-translate',
      title: 'language',
    },
    {
      id: 13,
      IconType: Icon.AntDesign,
      IconName: 'camera',
      title: 'Photography',
    },
    {
      id: 14,
      IconType: Icon.Ionicons,
      IconName: 'shirt',
      title: 'Fashion',
    },
    {
      id: 15,
      IconType: Icon.Entypo,
      IconName: 'leaf',
      title: 'Nature',
    },
    {
      id: 16,
      IconType: Icon.FontAwesome5,
      IconName: 'dumbbell',
      title: 'Gym',
    },
    {
      id: 17,
      IconType: Icon.MaterialIcons,
      IconName: 'pets',
      title: 'Animal',
    },
    {
      id: 18,
      IconType: Icon.FontAwesome5,
      IconName: 'lightbulb',
      title: 'Technology',
    },
    {
      id: 19,
      IconType: Icon.FontAwesome5,
      IconName: 'business-time',
      title: 'Business',
    },
  ];

  useEffect(() => {
    const getInterest = async () => {
      const interest = await AsyncStorage.getItem('interest');
      if (interest) {
        setSelectedInterests(JSON.parse(interest));
      }
    };
    getInterest();
  }, []);

  const handleInterest = async () => {
    await AsyncStorage.setItem('interest', JSON.stringify(selectedInterests));
    navigation.navigate(routes.Upload_Photos);
    await AsyncStorage.setItem('lastVisitedRoute', routes.Upload_Photos);
  };

  return (
    <AppView
      style={{
        flex: 1,
        paddingHorizontal: 15,
      }}>
      <AppStatusBar isDark={false} isbg={false} />
      <AppHeader isBlack={true} isColor={true} isBack={routes.School_Screen} />
      <AppText style={{fontWeight: 'bold', marginTop: 30, fontSize: 20}}>
        Select up to 10 interests
      </AppText>
      <AppText
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          opacity: 0.5,
        }}>
        Discover Meaningful Connections by Selecting Your Interests
      </AppText>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 15,
          paddingVertical: 20,
        }}>
        {interestArr.map((item, index) => (
          <TouchableOpacity
            onPress={() => handleSelect(item)}
            style={[
              styles.cardContainer,
              {
                backgroundColor: selectedInterests.some(
                  val => val.id == item.id,
                )
                  ? appColors.primaryColor
                  : appColors.TextInput_BgColor,
              },
            ]}
            key={index}>
            <Text
              style={{
                // color:  appColors.DARK_GRAY,
                color: selectedInterests.some(val => val.id == item.id)
                  ? appColors.white
                  : appColors.DARK_GRAY,
                fontSize: 13,
                // marginRight: 5,
              }}>
              {item.title}
            </Text>
            <AppIcon
              Type={item.IconType}
              name={item.IconName}
              color={
                selectedInterests.some(val => val.id == item.id)
                  ? appColors.white
                  : appColors.DARK_GRAY
              }
              size={16}
            />
          </TouchableOpacity>
        ))}
      </View>

      <AppButton
        disabled={selectedInterests ? false : true}
        title="Next"
        style={{
          marginTop: '20%',
          backgroundColor:
            selectedInterests.length > 0
              ? appColors.secondoryColor
              : appColors.white,
          borderWidth: selectedInterests.length > 0 ? 0 : 1,
          borderColor:
            selectedInterests.length > 0
              ? appColors.secondoryColor
              : appColors.Black_color,
        }}
        onPress={handleInterest}
      />
    </AppView>
  );
};

export default SelectInterest;

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    flexDirection: 'row',
    gap: 5,
  },
});
