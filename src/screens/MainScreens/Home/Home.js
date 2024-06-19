import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
  Modal,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import appColors from '../../../utils/appColors';
import AppGradientView from '../../../libComponents/AppGradientView';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import {useSelector} from 'react-redux';
import AppText from '../../../libComponents/AppText';
import AppButton from '../../../libComponents/AppButton';
import FilterModal from '../../../Modals/FilterModal';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {routes} from '../../../utils/routes';

const Home = ({navigation}) => {
  const [prigeRange, setPriceRange] = useState([]);
  const isarkMode = useSelector(state => state.auth.isDarkMode);

  const useAddress = useSelector(state => state.auth.useAddress);
  const [showFilterModal, setshowFilterModal] = useState(false);
  const [selectedIntrestGender, setSelectedIntrestGender] = useState({
    id: 1,
    gender: 'Women',
    value: 'women',
  });
  const [selectedSortBy, setSelectedSortBy] = useState({
    id: 1,
    keys: 'Online',
    value: 'online',
  });

  //use- for target swiper
  const swiperRef = useRef(null);

  const genderArr = [
    {id: 1, gender: 'Women', value: 'women'},
    {id: 2, gender: 'Men', value: 'men'},
    {id: 3, gender: 'Both', value: 'both'},
  ];
  const sortByArr = [
    {id: 1, keys: 'Online', value: 'online'},
    {id: 2, keys: 'Popular', value: 'popular'},
    {id: 3, keys: 'Highly Match', value: 'highly_match'},
  ];
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
    <AppGradientView
      colors={isarkMode ? ['#000', '#000'] : appColors.PrimaryGradient}>
      <AppStatusBar isDark={false} isbg={true} />
      <AppHeader isBlack={true} isColor={true} />
      <View
        style={{
          // marginHorizontal: 15,
          paddingHorizontal: 20,
        }}>
        <AppText style={styles.textTitle}>Location</AppText>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <AppIcon
              Type={Icon.Ionicons}
              name={'location-sharp'}
              size={18}
              color={appColors.white}
            />
            {/* <Text style={styles.textsubtitle}>New York, USA</Text> */}
            <AppText numberOfLines={1} style={styles.textsubtitle}>
              {useAddress}
            </AppText>
          </View>

          <View style={{flexDirection: 'row', gap: 10, zIndex: 9999}}>
            <TouchableOpacity
              onPress={() => setshowFilterModal(true)}
              style={styles.IconContainer}>
              <AppIcon
                Type={Icon.MaterialIcons}
                name={'tune'}
                size={20}
                color={appColors.primaryColor}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.IconContainer}
              onPress={() => navigation.navigate(routes.NotificationScreen)}>
              <AppIcon
                Type={Icon.MaterialIcons}
                name={'notifications-active'}
                size={20}
                color={appColors.secondoryColor}
                // style={{color: appColors.secondoryColor}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Swiper
        infinite={true}
        ref={swiperRef}
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
                {/* {buttonArr.map((item, index) => {
                  return ( */}
                {/* -----------------------cross button-------------- */}
                <TouchableOpacity
                  // targedt all property of swiper in swiperref.current , current is a object that provide useRef
                  onPress={() => swiperRef.current.swipeLeft()}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    backgroundColor: appColors.Black_color,
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 3,
                  }}>
                  <AppIcon
                    Type={Icon.Entypo}
                    name={'cross'}
                    color={appColors.primaryColor}
                    size={30}
                    style={{color: appColors.primaryColor}}
                  />
                </TouchableOpacity>

                {/* -----------------------star button-------------- */}

                <TouchableOpacity
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    backgroundColor: appColors.secondoryColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 3,
                  }}>
                  <AppIcon
                    Type={Icon.Fontisto}
                    name={'star'}
                    color={appColors.Black_color}
                    size={22}
                  />
                </TouchableOpacity>

                {/* -----------------------heart button-------------- */}
                <TouchableOpacity
                  onPress={() => swiperRef.current.swipeRight()}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    backgroundColor: appColors.primaryColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 3,
                  }}>
                  <AppIcon
                    Type={Icon.AntDesign}
                    name={'heart'}
                    color={appColors.white}
                    size={24}
                  />
                </TouchableOpacity>

                {/* );
                })} */}
              </View>
            </View>
          );
        }}
        cardIndex={0}
        backgroundColor={'rgba(52, 52, 52, 0)'}
        stackSize={5}
      />

      <Modal
        visible={showFilterModal}
        transparent={true}
        onRequestClose={() => {
          setshowFilterModal(false);
        }}>
        <View style={{flex: 1, backgroundColor: appColors.transparant2}}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setshowFilterModal(false)}
            style={{flex: 1}}></TouchableOpacity>
          <View
            style={{
              width: '100%',
              backgroundColor: appColors.white,
              marginTop: 'auto',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              paddingHorizontal: 15,
              paddingVertical: 20,
            }}>
            <AppText
              style={{
                alignSelf: 'center',
                color: appColors.Black_color,
                fontSize: 17,
                fontWeight: '500',
              }}>
              FILTER
            </AppText>
            {/* -------------Intrested In------------ */}
            <View style={{gap: 10, marginTop: 25}}>
              <AppText
                style={{
                  color: appColors.DARK_GRAY,
                  fontSize: 16,
                  fontWeight: '500',
                  opacity: 0.8,
                }}>
                Interested In
              </AppText>
              <View style={{flexDirection: 'row', gap: 12}}>
                {genderArr.map((item, i) => {
                  return (
                    <AppButton
                      onPress={() => setSelectedIntrestGender(item)}
                      key={i}
                      style={{
                        height: 34,
                        paddingHorizontal: 18,
                        borderRadius: 20,
                        backgroundColor:
                          selectedIntrestGender.id == item.id
                            ? appColors.primaryColor
                            : appColors.grayShade,
                      }}
                      color={
                        selectedIntrestGender.id == item.id
                          ? appColors.white
                          : appColors.DARK_GRAY
                      }
                      titleStyle={{
                        fontSize: 14,
                        fontWeight: '400',
                      }}
                      title={item.gender}
                    />
                  );
                })}
              </View>
            </View>
            {/* -------------Sort By ------------ */}

            <View style={{gap: 10, marginVertical: 18}}>
              <AppText
                style={{
                  color: appColors.DARK_GRAY,
                  fontSize: 16,
                  fontWeight: '500',
                  opacity: 0.8,
                }}>
                Sort by
              </AppText>
              <View style={{flexDirection: 'row', gap: 12}}>
                {sortByArr.map((item, i) => {
                  return (
                    <AppButton
                      onPress={() => setSelectedSortBy(item)}
                      key={i}
                      style={{
                        height: 34,
                        paddingHorizontal: 18,
                        borderRadius: 20,
                        backgroundColor:
                          selectedSortBy.id == item.id
                            ? appColors.primaryColor
                            : appColors.grayShade,
                      }}
                      color={
                        selectedSortBy.id == item.id
                          ? appColors.white
                          : appColors.DARK_GRAY
                      }
                      titleStyle={{
                        fontSize: 14,
                        fontWeight: '400',
                      }}
                      title={item.keys}
                    />
                  );
                })}
              </View>
            </View>
            {/* ===========DistanceRange======================================== */}
            <View style={{marginVertical: 0}}>
              <AppText
                style={{
                  color: appColors.DARK_GRAY,
                  fontSize: 16,
                  fontWeight: '500',
                  opacity: 0.8,
                }}>
                Distance
              </AppText>
              <View style={{alignItems: 'center'}}>
                <MultiSlider
                  min={0}
                  max={100}
                  values={[0, 1000]}
                  onValuesChangeFinish={val => setPriceRange(val)}
                />
              </View>
            </View>
            <View style={{marginVertical: 0}}>
              <AppText
                style={{
                  color: appColors.DARK_GRAY,
                  fontSize: 16,
                  fontWeight: '500',
                  opacity: 0.8,
                }}>
                Age
              </AppText>
              <View style={{alignItems: 'center'}}>
                <MultiSlider
                  min={0}
                  max={100}
                  values={[0, 1000]}
                  onValuesChangeFinish={val => setPriceRange(val)}
                />
              </View>

              {/* <MultiSlider
                isMarkersSeparated={true}
                customMarkerLeft={e => {
                  return (
                    <CustomSliderMarkerLeft currentValue={e.currentValue} />
                  );
                }}
                customMarkerRight={e => {
                  return (
                    <CustomSliderMarkerRight currentValue={e.currentValue} />
                  );
                }}
              /> */}
            </View>

            {/* -------------Bottom Buttons------------ */}
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <AppButton
                style={{
                  paddingHorizontal: 18,
                  borderRadius: 6,
                  backgroundColor: appColors.grayShade,
                  height: 45,
                  width: '48%',
                }}
                color={appColors.Black_color}
                titleStyle={{
                  fontSize: 15,
                  fontWeight: 'bold',
                }}
                title={'Reset Filter'}
              />
              <AppButton
                style={{
                  paddingHorizontal: 18,
                  borderRadius: 6,
                  backgroundColor: appColors.secondoryColor,
                  height: 45,
                  width: '48%',
                }}
                color={appColors.Black_color}
                titleStyle={{
                  fontSize: 15,
                  fontWeight: 'bold',
                }}
                title={'Apply'}
              />
            </View>
          </View>
        </View>
      </Modal>
    </AppGradientView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: appColors.Black_color,
  },
  textTitle: {
    // color: appColors.Black_color,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textsubtitle: {
    // color: appColors.Black_color,
    fontSize: 15,
    fontWeight: '500',
    width: '72%',
  },
  IconContainer: {
    flexDirection: 'row',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: appColors.white,

    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
});
