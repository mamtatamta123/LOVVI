import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';
import AppView from '../../../libComponents/AppView';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import AppButton from '../../../libComponents/AppButton';
import {routes} from '../../../utils/routes';

import appColors from '../../../utils/appColors';
import {flingGestureHandlerProps} from 'react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler';

const RecentlyAdded = ({navigation}) => {
  return (
    <AppView>
      <AppStatusBar isDark={false} isbg={false} />
      <AppHeader isBlack={true} isColor={true} />
      <View style={styles.container}>
        <AppText style={styles.title}> Recently Added</AppText>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
              return (
                <View
                  style={{
                    height: 200,
                    width: '48%',
                    backgroundColor: appColors.white,
                    marginBottom: 15,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 5,
                  }}>
                  <TouchableOpacity activeOpacity={0.8}>
                    <ImageBackground
                      resizeMode="cover"
                      borderRadius={15}
                      source={require('../../../assets/Images/women.png')}
                      style={{
                        height: '100%',
                        width: '100%',
                        alignSelf: 'center',
                      }}>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          paddingHorizontal: 10,
                          marginTop: 'auto',
                          marginBottom: 15,
                          alignItems: 'center',
                        }}>
                        <View>
                          <View style={{flexDirection: 'row', gap: 5}}>
                            <AppText
                              style={{
                                color: appColors.white,
                                fontWeight: '500',
                                fontSize: 15,
                              }}>
                              Mamta
                            </AppText>

                            <AppIcon
                              Type={Icon.MaterialIcons}
                              name={'verified'}
                              color={'gold'}
                              size={18}
                            />
                          </View>

                          <AppText
                            style={{
                              color: appColors.white,
                              fontWeight: '400',
                              fontSize: 12,
                            }}>
                            Pithoragarh, IND
                          </AppText>
                        </View>
                        <View
                          style={{
                            height: 28,
                            width: 28,
                            borderRadius: 32 / 2,
                            backgroundColor: appColors.primaryColor,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <AppIcon
                            Type={Icon.FontAwesome}
                            name={'heart'}
                            color={appColors.white}
                            size={17}
                          />
                        </View>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </AppView>
  );
};

export default RecentlyAdded;

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.white,
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sourceContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  cardContainer: {
    height: 130,
    width: '50%',
    backgroundColor: appColors.TextInput_BgColor,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginTop: 10,
    borderColor: appColors.TextInput_BgColor,
  },
  selectedCard: {
    borderColor: appColors.primaryColor,
  },
  cardImage: {
    height: 100,
    width: 100,
  },
  cardTitle: {
    fontSize: 12,
  },
  button: {
    backgroundColor: appColors.white,
    marginBottom: '3%',
    marginTop: '20%',
    borderWidth: 1,
    borderColor: appColors.BLACK, // Set the border color for the button
    // borderWidth: selectedCardIndex === null ? 0.8 : 0,
  },
  buttonSelected: {
    backgroundColor: appColors.secondoryColor,
  },
});
