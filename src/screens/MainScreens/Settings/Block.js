import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import AppView from '../../../libComponents/AppView';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import {Icon} from '../../../libComponents/AppIcon';
import appColors from '../../../utils/appColors';
import AppButton from '../../../libComponents/AppButton';

const Block = () => {
  const [UserName, setUserName] = useState();
  return (
    <AppView>
      <AppStatusBar isDark={false} isbg={false} />
      <AppHeader isBlack={true} isColor={true} />
      <View style={{marginHorizontal: 15}}>
        <AppText style={styles.title}>Block Contacts</AppText>

        <View style={styles.textInput}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              value={UserName}
              placeholder="Search for name or number"
              placeholderTextColor={appColors.DARK_GRAY}
              onChangeText={text => setUserName(text)}
            />
          </View>
        </View>
        <AppButton title={'Import Contacts'} style={{marginTop: 20}} />
      </View>
    </AppView>
  );
};

export default Block;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  textContainer: {
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: appColors.TextInput_BgColor,

    paddingHorizontal: 10,
    backgroundColor: appColors.TextInput_BgColor,
  },
});
