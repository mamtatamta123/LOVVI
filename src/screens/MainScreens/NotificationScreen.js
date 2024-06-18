import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import AppView from '../../libComponents/AppView';
import AppStatusBar from '../../libComponents/AppStatusBar';
import AppHeader from '../../libComponents/AppHeader';
import AppText from '../../libComponents/AppText';
import AppIcon, {Icon} from '../../libComponents/AppIcon';

const NotificationScreen = () => {
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
          <AppText style={styles.title}> Notification</AppText>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginBottom: '50%'}}>
          {array.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 0.5,
                borderBottomColor: appColors.IconColor,
              }}>
              <Image
                source={require('../../assets/Images/profile.png')}
                style={{height: 50, width: 50}}
              />

              <View style={{marginHorizontal: 10, paddingVertical: '4%'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.title}>Jennifer</Text>
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

export default NotificationScreen;

const styles = StyleSheet.create({});
