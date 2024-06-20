// import {StyleSheet, Text, View} from 'react-native';
// import React, {useState} from 'react';
// import AppView from '../../../libComponents/AppView';
// import AppStatusBar from '../../../libComponents/AppStatusBar';
// import AppHeader from '../../../libComponents/AppHeader';
// import AppText from '../../../libComponents/AppText';
// import AppIcon, {Icon} from '../../../libComponents/AppIcon';
// import ToggleSwitch from 'toggle-switch-react-native';
// import appColors from '../../../utils/appColors';

// const ActiveScreen = () => {
//   const [isOn, setIsOn] = useState();
//   const [recentlyIsOn, setRecentlyIsOn] = useState();
//   const handleToggle = () => {
//     setIsOn(!isOn);
//   };
//   return (
//     <AppView>
//       <AppStatusBar isDark={false} isbg={false} />
//       <AppHeader isBlack={true} isColor={true} />
//       <View style={{marginHorizontal: 15}}>
//         <AppText style={styles.title}>Active</AppText>

//         <View style={styles.section}>
//           <View style={styles.row}>
//             <AppText style={styles.rowTitle}>Show active status</AppText>

//             <ToggleSwitch
//               isOn={isOn}
//               onColor={appColors.primaryColor}
//               offColor={appColors.DARK_GRAY}
//               // label="Example label"
//               labelStyle={{color: 'black', fontWeight: '900'}}
//               size="small"
//               onToggle={handleToggle}
//             />
//           </View>

//           <Text style={styles.description}>
//             Active status is displayed on your profile if you were active in the
//             Lovvi app within the last 2 hours
//           </Text>
//         </View>
//         <View style={styles.section}>
//           <View style={styles.row}>
//             <AppText style={styles.rowTitle}>
//               Show recently active status
//             </AppText>

//             <ToggleSwitch
//               recentlyIsOn={recentlyIsOn}
//               onColor={appColors.primaryColor}
//               offColor={appColors.DARK_GRAY}
//               // label="Example label"
//               labelStyle={{color: 'black', fontWeight: '900'}}
//               size="small"
//               onToggle={() => setRecentlyIsOn(!recentlyIsOn)}
//             />
//           </View>

//           <Text style={styles.description}>
//             Recently active status is displayed on your profile if you were
//             active in the Lovvi app within the last 24 hours
//           </Text>
//         </View>
//       </View>
//     </AppView>
//   );
// };

// export default ActiveScreen;

// const styles = StyleSheet.create({
//   title: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     marginTop: 25,
//   },
//   container: {
//     marginHorizontal: 15,
//     paddingVertical: 30,
//   },
//   section: {
//     borderBottomWidth: 1,
//     borderBottomColor: appColors.IconColor,
//     paddingVertical: 20,
//   },
//   sectionTitle: {
//     color: appColors.BLACK,
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   rowTitle: {
//     fontSize: 16,
//     color: appColors.BLACK,
//     fontWeight: '500',
//   },
//   rowContent: {
//     flexDirection: 'row',
//   },
//   phoneNumber: {
//     marginLeft: 10,
//     fontSize: 13,
//     color: appColors.BLACK,
//     fontWeight: '500',
//   },
//   description: {
//     marginTop: 2,
//     color: appColors.IconColor,
//     // width: '90%',
//   },
// });

import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppView from '../../../libComponents/AppView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';
import ToggleSwitch from 'toggle-switch-react-native';
import appColors from '../../../utils/appColors';

const ActiveScreen = () => {
  const [isOn, setIsOn] = useState(false); // State for the first toggle switch
  const [recentlyIsOn, setRecentlyIsOn] = useState(false); // State for the second toggle switch

  const handleToggle = toggleType => {
    if (toggleType === 'active') {
      setIsOn(!isOn);
    } else if (toggleType === 'recent') {
      setRecentlyIsOn(!recentlyIsOn);
    }
  };

  return (
    <AppView>
      <AppStatusBar isDark={false} isbg={false} />
      <AppHeader isBlack={true} isColor={true} />
      <View style={{marginHorizontal: 15}}>
        <AppText style={styles.title}>Active</AppText>

        <View style={styles.section}>
          <View style={styles.row}>
            <AppText style={styles.rowTitle}>Show active status</AppText>

            <ToggleSwitch
              isOn={isOn}
              onColor={appColors.primaryColor}
              offColor={appColors.DARK_GRAY}
              // label="Example label"
              labelStyle={{color: 'black', fontWeight: '900'}}
              size="small"
              onToggle={() => handleToggle('active')}
            />
          </View>

          <Text style={styles.description}>
            Active status is displayed on your profile if you were active in the
            Lovvi app within the last 2 hours
          </Text>
        </View>
        <View style={styles.section}>
          <View style={styles.row}>
            <AppText style={styles.rowTitle}>
              Show recently active status
            </AppText>

            <ToggleSwitch
              isOn={recentlyIsOn}
              onColor={appColors.primaryColor}
              offColor={appColors.DARK_GRAY}
              // label="Example label"
              labelStyle={{color: 'black', fontWeight: '900'}}
              size="small"
              onToggle={() => handleToggle('recent')}
            />
          </View>

          <Text style={styles.description}>
            Recently active status is displayed on your profile if you were
            active in the Lovvi app within the last 24 hours
          </Text>
        </View>
      </View>
    </AppView>
  );
};

export default ActiveScreen;

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
    // color: appColors.BLACK,
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
