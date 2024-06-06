import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AppView from '../../../libComponents/AppView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import ToggleSwitch from 'toggle-switch-react-native';
import appColors from '../../../utils/appColors';

const FriendsOfFriend = () => {
  const [isOn, setIsOn] = useState();
  const handleToggle = () => {
    setIsOn(!isOn); // Toggle the value of isOn
  };
  return (
    <AppView>
      <AppStatusBar isDark={false} isbg={false} />
      <AppHeader isBlack={true} isColor={true} />
      <View style={{marginHorizontal: 15}}>
        <AppText style={styles.title}>Friends of Friends</AppText>

        <View style={styles.row}>
          <AppText style={styles.rowTitle}>Enable Friends of Friends</AppText>

          <ToggleSwitch
            isOn={isOn}
            onColor={appColors.primaryColor}
            offColor={appColors.DARK_GRAY}
            // label="Example label"
            labelStyle={{color: 'black', fontWeight: '900'}}
            size="small"
            onToggle={handleToggle}
          />
        </View>
        <Text>Last updated: 0 days ago</Text>

        <Text style={styles.description}>
          You and your contacts on Lovvi may appear as mutual contacts to other
          members who have opted into Friends of Friends.{' '}
          <TouchableOpacity>
            <Text
              style={{
                color: appColors.primaryColor,
                textDecorationLine: 'underline',
              }}>
              Learn more about Friends of Friends
            </Text>
          </TouchableOpacity>
        </Text>

        <Text
          style={{
            color: appColors.primaryColor,
            fontSize: 15,
            fontWeight: '500',
            marginTop: 10,
          }}>
          Contact uploaded
        </Text>
      </View>
    </AppView>
  );
};

export default FriendsOfFriend;
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 25,
  },
  container: {
    marginHorizontal: 15,
    paddingVertical: 30,
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: appColors.IconColor,
    paddingVertical: 20,
  },
  sectionTitle: {
    color: appColors.BLACK,
    fontWeight: 'bold',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  rowTitle: {
    fontSize: 16,
    color: appColors.BLACK,
    fontWeight: '500',
  },
  rowContent: {
    flexDirection: 'row',
  },
  phoneNumber: {
    marginLeft: 10,
    fontSize: 13,
    color: appColors.BLACK,
    fontWeight: '500',
  },
  description: {
    marginTop: 2,
    color: appColors.IconColor,
    // width: '80%',
  },
  highlight: {
    color: appColors.primaryColor, // Change this to your desired text color
    // Any other styles you want to apply to the highlighted text
  },
});
