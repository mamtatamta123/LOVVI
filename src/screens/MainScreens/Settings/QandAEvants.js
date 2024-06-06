import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppView from '../../../libComponents/AppView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import ToggleSwitch from 'toggle-switch-react-native';
import appColors from '../../../utils/appColors';

const QandAEvants = () => {
  const [isOn, setIsOn] = useState();
  const handleToggle = () => {
    setIsOn(!isOn); // Toggle the value of isOn
  };
  return (
    <AppView>
      <AppStatusBar isDark={false} isbg={false} />
      <AppHeader isBlack={true} isColor={true} />
      <View style={{marginHorizontal: 15}}>
        <AppText style={styles.title}>Q&A events</AppText>
        <View style={styles.section}>
          <View style={styles.row}>
            <AppText style={styles.rowTitle}>Participate in Q&A events</AppText>

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

          <Text style={styles.description}>
            Turning this off will remove Q&A event content from your profile,
            and you’ll no longer see profiles with Q&A events content.
          </Text>
        </View>
      </View>
    </AppView>
  );
};

export default QandAEvants;

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
    // width: '90%',
  },
});
