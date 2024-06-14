import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';
import AppView from '../../../libComponents/AppView';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';

import {routes} from '../../../utils/routes';

import appColors from '../../../utils/appColors';

const MessageScreen = ({navigation}) => {
  const [onSearchCourses, setOnSearchCourses] = useState();
  const array = [1, 2, 3, 4, 5, 6];
  return (
    <AppView>
      <AppStatusBar isDark={false} isbg={false} />
      <AppHeader isBlack={true} isColor={true} />
      <View style={{paddingHorizontal: 15}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',

            gap: 6,
          }}>
          <AppText style={styles.title}> Messages</AppText>
          <View
            style={{
              height: 25,
              width: 25,
              borderRadius: 20,
              backgroundColor: appColors.secondoryColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 13, fontWeight: 'bold'}}>05</Text>
          </View>
        </View>

        <View style={styles.input}>
          <AppIcon
            Type={Icon.EvilIcons}
            name={'search'}
            style={{marginLeft: 5, alignSelf: 'center'}}
          />
          <TextInput
            value={onSearchCourses}
            placeholder="Search"
            onChangeText={text => setOnSearchCourses(text)}
            placeholderTextColor={appColors.LIGHT_Gray}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginBottom: '50%'}}>
          {array.map((item, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.Chat_Screen)}
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 0.5,
                borderBottomColor: appColors.IconColor,
              }}>
              <Image
                source={require('../../../assets/Images/profile.png')}
                style={{height: 50, width: 50}}
              />

              <View style={{marginHorizontal: 10, paddingVertical: '4%'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.title}>Jennifer</Text>
                  <View
                    style={{
                      borderRadius: 14,
                      backgroundColor: appColors.secondoryColor,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginHorizontal: 7,
                      paddingHorizontal: 8,
                      paddingVertical: 3,
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '500',
                        color: appColors.BLACK,
                      }}>
                      Likes You
                    </Text>
                  </View>
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '500',
                      color: appColors.IconColor,
                    }}>
                    Recently active, match now!
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </AppView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.white,
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    // marginBottom: 20,
    color: appColors.BLACK,
  },

  button: {
    backgroundColor: appColors.white,
    marginBottom: '3%',
    marginTop: '20%',
    borderWidth: 1,
    borderColor: appColors.BLACK,
  },
  buttonSelected: {
    backgroundColor: appColors.secondoryColor,
  },
  searchContainer: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: appColors.WHITE,

    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appColors.TextInput_BgColor,

    fontSize: 15,
    borderRadius: 5,
    gap: 5,
    // paddingVertical: 10,
    marginTop: 20,
  },
});
