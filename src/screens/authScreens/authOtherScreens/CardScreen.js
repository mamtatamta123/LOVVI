// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useState} from 'react';
// import appColors from '../../../utils/appColors';
// import {
//   responsiveWidth as wp,
//   responsiveFontSize as fp,
//   responsiveHeight as hp,
// } from 'react-native-responsive-dimensions';

// import AppButton from '../../../libComponents/AppButton';
// import {Icon} from '../../../libComponents/AppIcon';
// import AppGradientView from '../../../libComponents/AppGradientView';
// import AppStatusBar from '../../../libComponents/AppStatusBar';
// import AppHeader from '../../../libComponents/AppHeader';
// import AppView from '../../../libComponents/AppView';
// import AppText from '../../../libComponents/AppText';
// import {routes} from '../../../utils/routes';
// import CheckBox from '@react-native-community/checkbox';
// import AppTextInputLabel from '../../../libComponents/AppTextInputLabel';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import {AppColors} from '../utils/constants';
// import AppText from '../libComponents/AppText';
// import {useSelector} from 'react-redux';
// import AppIcon from '../libComponents/AppIcon';
// import {useNavigation} from '@react-navigation/native';
// import {Image} from 'react-native-animatable';

// const CardScreen = ({navigation,data, isImage = false, source, onPress}) => {

//     const cardArr = [
//         {
//         //   IconType: Icons.Feather,
//         //   IconName: 'phone-call',
//         //   label: 'Call',
//         //   backgroundColor: '#8dcd4e',
//           // ScreenName: routes.Call_History,
//         //   ScreenName: routes.Call_With_User,
//         //   iconSize: 26,
//         },
//         {
//         //   IconType: Icons.Ionicons,
//         //   IconName: 'chatbubbles-outline',
//         //   label: 'Chat',
//         //   backgroundColor: '#f9434f',
//         //   ScreenName: routes.ChatHistory,
//           // ScreenName: routes.ChatHistory,
//         //   iconSize: 29,
//         },
//         // {
//         //   IconType: Icons.Ionicons,
//         //   IconName: 'wallet-outline',
//         //   label: 'Wallet',
//         //   backgroundColor: '#fc8885',
//         //   ScreenName: routes.WalletBottomTab,
//         //   iconSize: 29,
//         // },
//         {
//         //   IconType: Icons.FontAwesome5,
//         //   IconName: 'clipboard-list',
//         //   label: 'Waitlist',
//         //   backgroundColor: '#3a261d',
//         //   ScreenName: routes.WaitList,
//         //   iconSize: 29,
//         },]







//   return (
//     <AppGradientView
//       style={{height: '100%'}}
//       colors={appColors.PrimaryGradient2}>
//       <AppStatusBar />
//       <AppHeader />
//       <ScrollView
//         keyboardShouldPersistTaps={'handled'}
//         contentContainerStyle={{flexGrow: 1}}>
//         <View style={styles.infoContainer}>
//           <Text style={styles.titleText}>Who are you</Text>
//           <Text style={styles.titleText}>looking for?</Text>
//           <Text style={styles.subtitleText}>
//             All good if it changes. There's something for everyone
//           </Text>
//         </View>

//         <TouchableOpacity
//       onPress={
//         data?.ScreenName
//           ? () => navigation?.navigate(data?.ScreenName)
//           : onPress
//       }
//       activeOpacity={0.5}
//       style={{
//         height: 135,
//         width: '32%',
//         borderRadius: 15,
//         backgroundColor: isDark ? AppColors.black : AppColors.white,
//         elevation: 5,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <View style={{marginTop: -10, alignItems: 'center'}}>
//         <View
//           style={{
//             height: 65,
//             width: 65,
//             backgroundColor: data?.backgroundColor,
//             borderRadius: 35,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           {isImage ? (
//             <Image source={source} style={{height: '65%', width: '65%'}} />
//           ) : (
//             <AppIcon
//               type={data?.IconType}
//               name={data?.IconName}
//               size={data.iconSize}
//               color={AppColors.white}
//             />
//           )}
//         </View>
//         <AppText
//           style={{
//             marginTop: 5,
//             fontWeight: 'bold',
//             fontSize: 14,
//             textAlign: 'center',
//           }}>
//           {data.label}
//         </AppText>
//       </View>
//     </TouchableOpacity>
//         <AppView style={styles.formContainer}>




   


// export default HomeCard;

// const styles = StyleSheet.create({});
//           <AppButton
//             style={{marginBottom: '3%', marginTop: '20%'}}
//             title={'Next'}
//             onPress={() => navigation.navigate(routes.House_Rules)}
//           />
//         </AppView>
//       </ScrollView>
//     </AppGradientView>
//   );
// };

// export default CardScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   headerContainer: {
//     flex: 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerText: {
//     color: appColors.white,
//     fontSize: 40,
//     fontWeight: 'bold',
//   },
//   infoContainer: {
//     // marginHorizontal: wp(5),
//     paddingHorizontal: 15,
//     paddingVertical: '8%',
//   },
//   titleText: {
//     color: appColors.Black_color,
//     fontSize: 24,
//     fontWeight: '900',
//     width: '70%',
//   },
//   subtitleText: {
//     color: appColors.Black_color,
//     fontSize: 15,
//     fontWeight: '500',
//     opacity: 0.6,
//     marginTop: 7,
//   },
//   formContainer: {
//     backgroundColor: appColors.white,
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     elevation: 2,
//     marginTop: 10,
//     paddingHorizontal: 15,
//     paddingTop: 10,
//   },
//   input: {
//     marginTop: 20,
//     // marginHorizontal: 20,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     paddingHorizontal: wp(5),
//     marginTop: hp(0.5),
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   checkboxText: {
//     color: appColors.BLACK,
//     fontSize: fp(2),
//   },
// });

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardScreen = () => {
  return (
    <View>
      <Text>CardScreen</Text>
    </View>
  )
}

export default CardScreen

const styles = StyleSheet.create({})