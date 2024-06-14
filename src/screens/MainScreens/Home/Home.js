import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import appColors from '../../../utils/appColors';
import AppGradientView from '../../../libComponents/AppGradientView';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import {useSelector} from 'react-redux';

const Home = () => {
  const useAddress = useSelector(state => state.auth.useAddress);

  const buttonArr = [
    {
      bgColor: appColors.white,
      iconType: Icon.Entypo,
      iconName: 'cross',
      iconColor: appColors.primaryColor,
      iconSize: 30,
      elevation: 3,
    },
    {
      bgColor: appColors.secondoryColor,
      iconType: Icon.Fontisto,
      iconName: 'star',
      iconColor: appColors.Black_color,
      iconSize: 22,
      elevation: 3,
    },
    {
      bgColor: appColors.primaryColor,
      iconType: Icon.AntDesign,
      iconName: 'heart',
      iconColor: appColors.white,
      iconSize: 24,
      elevation: 3,
    },
  ];
  return (
    <AppGradientView>
      <AppStatusBar isDark={false} isbg={true} />
      <AppHeader isBlack={true} isColor={true} />
      <View
        style={{
          marginHorizontal: 15,
        }}>
        <Text style={styles.textTitle}>Location</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <AppIcon
              Type={Icon.Ionicons}
              name={'location-sharp'}
              size={14}
              color={appColors.BLACK}
            />
            {/* <Text style={styles.textsubtitle}>New York, USA</Text> */}
            <Text style={styles.textsubtitle}>{useAddress}</Text>
          </View>

          <View style={{flexDirection: 'row', gap: 10, zIndex: 9999}}>
            <TouchableOpacity
              onPress={() => console.log('hello')}
              style={styles.IconContainer}>
              <AppIcon
                Type={Icon.MaterialIcons}
                name={'notifications-active'}
                size={14}
                color={appColors.primaryColor}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.IconContainer}>
              <AppIcon
                Type={Icon.MaterialIcons}
                name={'notifications-active'}
                size={14}
                color={appColors.secondoryColor}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Swiper
        horizontalSwipe={true}
        verticalSwipe={false}
        cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
        renderCard={card => {
          console.log('card', card);
          return (
            <View
              style={{
                zIndex: 999,
                height: '70%',
                backgroundColor: '#fff',
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 18,
                elevation: 5,
                marginTop: 70,
              }}>
              <View
                style={{
                  height: '80%',
                  width: '100%',
                  backgroundColor: '#000',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ImageBackground
                  resizeMode="cover"
                  borderRadius={15}
                  source={require('../../../assets/Images/women.png')}
                  style={{
                    height: '100%',
                    width: '100%',
                    alignSelf: 'center',
                    opacity: 0.8,
                    justifyContent: 'center',
                  }}>
                  {/* <Text style={{color: appColors.white}}>Jennifer</Text>
                  <Text style={{color: appColors.white}}>New York, USA</Text> */}
                </ImageBackground>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                {buttonArr.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={{
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                        backgroundColor: item.bgColor,
                        justifyContent: 'center',
                        alignItems: 'center',
                        elevation: item.elevation,
                      }}>
                      <AppIcon
                        Type={item.iconType}
                        name={item.iconName}
                        color={item.iconColor}
                        size={item.iconSize}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          );
        }}
        cardIndex={0}
        backgroundColor={'rgba(52, 52, 52, 0)'}
        stackSize={5}
      />
    </AppGradientView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: appColors.Black_color,
  },
  textTitle: {
    color: appColors.Black_color,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textsubtitle: {
    color: appColors.Black_color,
    fontSize: 15,
    fontWeight: '500',
  },
  IconContainer: {
    flexDirection: 'row',
    height: 25,
    width: 25,
    borderRadius: 14,
    backgroundColor: appColors.white,

    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
});
