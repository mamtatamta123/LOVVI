import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Share,
  Modal,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import AppHeader from '../../../libComponents/AppHeader';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import appColors from '../../../utils/appColors';
import AppText from '../../../libComponents/AppText';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import {routes} from '../../../utils/routes';
import AppButton from '../../../libComponents/AppButton';
import {setLoggedIn} from '../../../redux/auth.reducer';
import {useDispatch} from 'react-redux';
import {
  responsiveWidth as wp,
  responsiveFontSize as fp,
  responsiveHeight as hp,
} from 'react-native-responsive-dimensions';
import ImagePicker from 'react-native-image-crop-picker';

const ProfileMenuButton = ({iconType, iconSize, iconName, title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 15,
        paddingVertical: 13,
        borderBottomWidth: 1,
        borderBottomColor: appColors.IconColor,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: 30}}>
          <AppIcon
            Type={iconType}
            name={iconName}
            size={iconSize}
            color={appColors.primaryColor}
          />
        </View>
        <Text style={{color: appColors.BLACK}}>{title}</Text>
      </View>
      <AppIcon
        Type={Icon.Feather}
        name={'chevron-right'}
        size={19}
        color={appColors.BLACK}
      />
    </TouchableOpacity>
  );
};

const ProfileScreen = ({navigation}) => {
  const [image, setSelectedImage] = useState('');
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(true);
  const share = async () => {
    try {
      const title = 'Checkout this awesome app 🔥🔥';
      const url = 'https://www.google.co.in/';
      const message = `${title}\n${url}`;
      await Share.share({
        message: message,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const takeImageFromCamera = () => {
    ImagePicker.openCamera({
      width: 40,
      height: 18,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setSelectedImage(image.path);
      })
      .catch(error => {
        console.log('Error taking image: ', error);
      });
  };
  const pickImagesFromGallery = () => {
    getPermission();
    ImagePicker.openPicker({
      width: 1000,
      height: 1000,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setSelectedImage(image.path);
      })
      .catch(error => {
        console.log('Error selecting image: ', error);
      });
  };
  const handlePress = () => {
    takeImageFromCamera();
    pickImagesFromGallery();
  };

  return (
    <>
      <View style={{backgroundColor: appColors.white, flex: 1}}>
        <AppStatusBar isDark={false} isbg={false} />
        <AppHeader isBlack={true} isColor={true} />
        <AppText
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginHorizontal: 15,
            marginTop: 30,
          }}>
          Profile
        </AppText>
        <View style={{alignItems: 'center', marginBottom: '7%'}}>
          <View
            style={{
              height: 120,
              width: 120,

              borderRadius: 50,
              position: 'relative',
            }}>
            <Image
              source={require('../../../assets/Images/profile.png')}
              resizeMode="cover"
              // source={{uri: image}}
              style={{height: 120, width: 120}}
            />

            <TouchableOpacity
              onPress={takeImageFromCamera}
              style={{
                backgroundColor: appColors.secondoryColor,
                height: 30,
                width: 30,
                position: 'absolute',
                bottom: 6,
                right: 6,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AppIcon
                Type={Icon.Entypo}
                name={'pencil'}
                color={appColors.BLACK}
                size={20}
              />
            </TouchableOpacity>
          </View>
          <AppText
            style={{
              fontWeight: '500',
              fontSize: 20,
              marginHorizontal: 15,
              marginTop: 5,
              color: appColors.Black_color,
            }}>
            Mamta
          </AppText>
        </View>

        <ProfileMenuButton
          iconType={Icon.Ionicons}
          iconName={'person-sharp'}
          iconSize={20}
          title={'Your Profile'}
          // onPress={() => navigation.navigate(routes.Chat_Screen)}
        />
        <ProfileMenuButton
          iconType={Icon.Ionicons}
          iconName={'settings'}
          iconSize={20}
          title={'Settings'}
          onPress={() => navigation.navigate(routes.Settings_Screen)}
        />

        <ProfileMenuButton
          iconType={Icon.Foundation}
          iconName={'info'}
          iconSize={23}
          title={'Help Centre'}
          onPress={() => navigation.navigate(routes.Community_Guidelines)}
        />

        <ProfileMenuButton
          iconType={Icon.MaterialIcons}
          iconName={'person-add-alt-1'}
          iconSize={22}
          title={'Invite Friends'}
          onPress={share}
        />

        <ProfileMenuButton
          iconType={Icon.MaterialIcons}
          iconName={'privacy-tip'}
          iconSize={20}
          title={'Privacy Policy'}
          onPress={() => navigation.navigate(routes.Privacy_Policy)}
        />

        <ProfileMenuButton
          iconType={Icon.MaterialIcons}
          iconName={'logout'}
          iconSize={20}
          title={'Log Out'}
          onPress={() => {
            dispatch(setLoggedIn(false));
          }}
        />
      </View>

      {/* <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(!isModalVisible)}>
        <StatusBar backgroundColor={appColors.modalbg} />
        <View style={styles.ModalViewContainer}>
          <View style={styles.modalSubContent}>
            <Text style={styles.modalTitle}>Logout</Text>
            <Text style={styles.modalText}>
              Are you sure you want to log out ?
            </Text>
            <View style={{width: '100%', marginTop: 20}}>
              <AppButton
                title="Yes, Logout"
                // style={{marginHorizontal: 20}}
                // onPress={() => navigation.navigate(routes.DatePickr_Screen)}
              />
            </View>

            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Text style={styles.editNameText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>  */}

      {/* <Modal
        animationType="fade"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(!isModalVisible)}>
        <StatusBar backgroundColor={appColors.modalbg} />
        <View style={styles.ModalViewContainer}>
          <View style={styles.modalSubContent}>
            <Text style={styles.modalTitle}>Filter</Text>
            <Text style={styles.modalText}>
              Are you sure you want to log out ?
            </Text>
            <View style={{width: '100%', marginTop: 20}}>
              <AppButton
                title="Yes, Logout"
                // style={{marginHorizontal: 20}}
                // onPress={() => navigation.navigate(routes.DatePickr_Screen)}
              />
            </View>

            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Text style={styles.editNameText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    paddingHorizontal: wp(5),
    marginTop: hp(0.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxText: {
    color: appColors.BLACK,
    fontSize: fp(2),
  },
  ModalViewContainer: {
    backgroundColor: appColors.modalbg,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '7%',
  },
  modalSubContent: {
    backgroundColor: appColors.white,
    borderRadius: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    paddingBottom: 25,
  },
  modalImage: {
    height: 100,
    width: 100,
    // height: '29%',
    // width: '50%',
    // backgroundColor: 'red',
  },
  modalTitle: {
    color: appColors.BLACK,
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalText: {
    color: appColors.BLACK,
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    opacity: 0.6,
  },
  buttonContainer: {
    // marginTop: 20,
  },
  editNameText: {
    color: appColors.BLACK,
    fontSize: 15,
    fontWeight: '500',
    marginTop: 10,
  },
});
