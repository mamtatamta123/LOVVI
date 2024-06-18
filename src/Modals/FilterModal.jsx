import {
  AppState,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import appColors from '../utils/appColors';
import AppText from '../libComponents/AppText';
import AppButton from '../libComponents/AppButton';

const FilterModal = () => {
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
  return (
    <Modal visible={false} transparent={true} onRequestClose={() => {}}>
      <View style={{flex: 1, backgroundColor: appColors.transparant2}}>
        <TouchableOpacity
          onPress={() => {}}
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
              {genderArr.map(item => {
                return (
                  <AppButton
                    style={{
                      height: 34,
                      paddingHorizontal: 18,
                      borderRadius: 20,
                      backgroundColor: appColors.primaryColor,
                    }}
                    color={appColors.white}
                    titleStyle={{
                      fontSize: 15,
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
              {sortByArr.map(item => {
                return (
                  <AppButton
                    style={{
                      height: 34,
                      paddingHorizontal: 18,
                      borderRadius: 20,
                      backgroundColor: appColors.primaryColor,
                    }}
                    color={appColors.white}
                    titleStyle={{
                      fontSize: 15,
                      fontWeight: '400',
                    }}
                    title={item.keys}
                  />
                );
              })}
            </View>
          </View>

          {/* -------------Bottom Buttons------------ */}
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
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
  );
};

export default FilterModal;

const styles = StyleSheet.create({});
