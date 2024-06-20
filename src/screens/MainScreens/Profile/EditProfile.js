import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Share,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import AppHeader from '../../../libComponents/AppHeader';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import appColors from '../../../utils/appColors';
import AppText from '../../../libComponents/AppText';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import {routes} from '../../../utils/routes';
import LabelContainer from 'rn-range-slider/LabelContainer';
import {flingHandlerName} from 'react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler';
import AppButton from '../../../libComponents/AppButton';
import AppView from '../../../libComponents/AppView';

const EditProfile = ({navigation}) => {
  const handleSelect = item => {
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
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [typeInput, setTypeInput] = useState();
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
  ];

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
    <AppView style={{flex: 1}}>
      <AppStatusBar isDark={false} isbg={false} />
      <AppHeader isBlack={true} isColor={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 15}}>
          <View style={styles.container}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <AppText style={styles.mainheading}>Jennifer</AppText>
              <AppIcon
                Type={Icon.MaterialIcons}
                name={'verified'}
                color={'gold'}
                size={18}
              />
            </View>
            <AppText style={styles.subText}>New York, USA</AppText>
          </View>
          <View style={styles.container}>
            <AppText style={{fontSize: 16, fontWeight: '500'}}>
              Description
            </AppText>
            <AppText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </AppText>
          </View>
          <View style={styles.container}>
            <AppText style={{fontSize: 16, fontWeight: '500'}}>
              Interest
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
          </View>
          <View style={styles.container}>
            <AppText style={{fontSize: 16, fontWeight: '500'}}>
              Jennifer Info
            </AppText>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <AppText>Age</AppText>
              <AppText>24 Years</AppText>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <AppText>Height</AppText>
              <AppText>168 cm</AppText>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <AppText>Speaks</AppText>
              <AppText>English</AppText>
            </View>
          </View>
          <View style={styles.container}>
            <AppText style={{fontSize: 16, fontWeight: '500'}}>
              Essential
            </AppText>
            <AppText>03 miles away</AppText>
            <AppText>03 miles away</AppText>
          </View>
          <View style={styles.container}>
            <AppText style={{fontSize: 16, fontWeight: '500'}}>
              More about me
            </AppText>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <AppText>Zodiacs</AppText>
              <AppText>Scorpio</AppText>
            </View>
          </View>

          {/* ========================================================= */}
          <View style={styles.container}>
            <AppText style={{fontSize: 16, fontWeight: '500'}}>
              Lifestyle
            </AppText>

            <AppText>How often do you smoke?</AppText>
          </View>
          <View style={styles.container}>
            <AppText
              style={{color: appColors.BLACK, fontSize: 16, fontWeight: '500'}}>
              Gallery
            </AppText>
            <TouchableOpacity
              style={{flexDirection: 'row', flexWrap: 'wrap'}}
              onPress={() => navigation.navigate(routes.Gallery_Screen)}>
              {[1, 1, 1, 1, 1, 1].map((item, index) => (
                <Image
                  key={index}
                  source={require('../../../assets/Images/women.png')}
                  style={{height: 100, width: 100, margin: 5, borderRadius: 10}}
                />
              ))}
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 200,
              width: '100%',
              backgroundColor: appColors.WHITE,
              alignSelf: 'center',
              marginTop: 10,
            }}>
            <View
              style={{
                height: '100%',
                backgroundColor: appColors.GRAY_BG,
                marginHorizontal: 20,
                alignSelf: 'center',
                width: '100%',
                paddingHorizontal: 15,
                elevation: 1,
                borderRadius: 13,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 15,
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: appColors.BLACK,
                    fontSize: 16,
                    fontWeight: '600',
                    marginRight: 10,
                  }}>
                  Send Jennifer a Message
                </Text>
              </View>
              <View
                style={{
                  height: 80,
                  width: '100%',
                  borderRadius: 13,
                  borderWidth: 1,
                  borderColor: appColors.grayShade,
                  justifyContent: 'space-between',
                  elevation: 1,
                  backgroundColor: appColors.WHITE,
                }}>
                <TextInput
                  value={typeInput}
                  placeholder="Type Message"
                  onChangeText={text => setTypeInput(text)}
                  style={{
                    flex: 1,
                    textAlign: 'auto',
                    textAlignVertical: 'top',
                    marginHorizontal: 10,
                    opacity: 1,
                    color: '#000',
                  }}
                />
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: appColors.red,
                  alignItems: 'center',
                  width: '30%',
                  marginHorizontal: 10,
                  borderRadius: 10,
                  padding: 10,
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    color: appColors.WHITE,
                    fontSize: 14,
                    fontWeight: '500',
                  }}>
                  Send
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <AppButton
            onPress={share}
            color={appColors.DARK_GRAY}
            title="Share Jennifer Profile"
            backgroundColor={appColors.white}
            style={{
              borderWidth: 1,
              borderColor: appColors.IconColor,
              marginTop: 10,
            }}
          />
          <AppButton
            onPress={() => navigation.navigate(routes.Block)}
            color={appColors.DARK_GRAY}
            title="Block Jennifer"
            backgroundColor={appColors.white}
            style={{
              borderWidth: 1,
              borderColor: appColors.IconColor,
              marginTop: 10,
            }}
          />
          <AppButton
            color={appColors.DARK_GRAY}
            title="Report Jennifer"
            backgroundColor={appColors.white}
            style={{
              borderWidth: 1,
              borderColor: appColors.IconColor,
              marginTop: 10,
            }}
          />
        </View>
        {/* </View> */}
      </ScrollView>
    </AppView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: appColors.IconColor,
  },

  mainheading: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  subText: {color: appColors.IconColor, fontSize: 15, fontWeight: '500'},
  // input: {
  //   color: appColors.white,
  //   backgroundColor: appColors.white,
  // },
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
