import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';
import AppView from '../../../libComponents/AppView';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import AppButton from '../../../libComponents/AppButton';
import { routes } from '../../../utils/routes';

const SelectSource = ({navigation}) => {
  return (
    <AppView>
      <AppStatusBar isDark={false} isbg={false} />
      <AppHeader isBlack={true} isColor={true} />
      <View style={styles.container}>
        <AppText style={styles.title}>Select Source</AppText>

        <View style={styles.rowContainer}>
          <View style={styles.sourceContainer}>
            <AppIcon Type={Icon.AntDesign} name={'camera'} />
            <Text style={{paddingHorizontal: 10}}>Camera</Text>
          </View>
          <AppIcon Type={Icon.AntDesign} name={'camera'} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'centers',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row',alignItems:'center',}}>
        
          <AppIcon Type={Icon.AntDesign} name={'camera'} />
          <Text style={{paddingHorizontal:10}}>Gallery</Text>
          </View>
          <View >
            <AppIcon Type={Icon.AntDesign} name={'camera'} />
          </View>
        </View>
        <AppButton title='next' onPress={()=>navigation.navigate(routes.Location_Screen)}/>
      </View>
    </AppView>
  );
};

export default SelectSource;

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
    flexDirection: 'row',
    alignItems: 'center',
  },
});
