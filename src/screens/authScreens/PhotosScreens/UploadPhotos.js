import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  StatusBar,
  Image,
  Alert,
  Linking,
  ToastAndroid,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import AppView from '../../../libComponents/AppView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';

import {PermissionsAndroid} from 'react-native';
import {routes} from '../../../utils/routes';
import AppButton from '../../../libComponents/AppButton';
import appColors from '../../../utils/appColors';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';

import ImagePicker from 'react-native-image-crop-picker';

import ImageSelectModal from '../../../Modals/ImageSelectModal';
import {TextInput} from 'react-native-gesture-handler';

const UploadPhotos = ({navigation}) => {
  const [showSelectOptionModal, setIsOpenageSelectModal] = useState(false);
  const [isOpenImageSelectModal, setIsOpenImageSelectModal] = useState(false);
  const [imageNumber, setImageNumber] = useState('');
  const [image1, setSelectedImage1] = useState('');
  const [image2, setSelectedImage2] = useState('');
  const [image3, setSelectedImage3] = useState('');
  const [image4, setSelectedImage4] = useState('');
  const [image5, setSelectedImage5] = useState('');
  const [image6, setSelectedImage6] = useState('');

  const getPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        console.log('granted====', granted);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setIsOpenImageSelectModal(!isOpenImageSelectModal);
        } else {
          console.log('hello');
          Linking.openSettings();
        }
      } catch (err) {
        console.warn(err);
      }
    }
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
        if (imageNumber === 'image1') {
          setSelectedImage1(image.path);
        } else if (imageNumber === 'image2') {
          setSelectedImage2(image.path);
        } else if (imageNumber === 'image3') {
          setSelectedImage3(image.path);
        } else if (imageNumber === 'image4') {
          setSelectedImage4(image.path);
        } else if (imageNumber === 'image5') {
          setSelectedImage5(image.path);
        } else if (imageNumber === 'image6') {
          setSelectedImage6(image.path);
        }
        setIsOpenImageSelectModal(false);
      })
      .catch(error => {
        setIsOpenImageSelectModal(false);
        console.log('Error selecting image: ', error);
      });
  };

  const takeImageFromCamera = () => {
    ImagePicker.openCamera({
      width: 40,
      height: 18,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setIsOpenImageSelectModal(false);
        if (imageNumber === 'image1') {
          setSelectedImage1(image.path);
        } else if (imageNumber === 'image2') {
          setSelectedImage2(image.path);
        } else if (imageNumber === 'image3') {
          setSelectedImage3(image.path);
        } else if (imageNumber === 'image4') {
          setSelectedImage4(image.path);
        } else if (imageNumber === 'image5') {
          setSelectedImage5(image.path);
        } else if (imageNumber === 'image6') {
          setSelectedImage6(image.path);
        }
      })
      .catch(error => {
        setIsOpenImageSelectModal(false);
        console.log('Error taking image: ', error);
      });
  };

  const handleSubmitImages = () => {
    if (image1) {
      navigation.navigate(routes.Location_Screen);
    } else {
      ToastAndroid.show('All fields required!', ToastAndroid.BOTTOM);
    }
  };

  return (
    <>
      <AppStatusBar isDark={false} isbg={false} />
      <AppView
        style={{
          flex: 1,
          paddingHorizontal: 15,
        }}>
        <AppHeader isBlack={true} isColor={true} />
        <AppText style={styles.textContainer}>Upload Your Photos</AppText>
        <AppText style={styles.textsubcontainer}>
          To Boost Your Daily Match Potential, Include your Photos
        </AppText>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 30,
          }}>
          <TouchableOpacity
            onPress={() => {
              setIsOpenImageSelectModal(!isOpenImageSelectModal);
              setImageNumber('image1');
            }}
            activeOpacity={0.5}
            style={[styles.redBox, {borderWidth: image1 ? 0 : 2}]}>
            {image1 ? (
              <Image
                resizeMode="cover"
                source={{uri: image1}}
                style={{
                  height: '100%',
                  width: '100%',
                  paddingVertical: 100,
                  borderRadius: 10,
                }}
              />
            ) : (
              <AppIcon
                Type={Icon.AntDesign}
                name={'pluscircle'}
                color={appColors.primaryColor}
                size={26}
              />
            )}
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'space-between',
              width: '35%',
              alignItems: 'flex-end',
              gap: 5,
            }}>
            <TouchableOpacity
              onPress={() => {
                setIsOpenImageSelectModal(!isOpenImageSelectModal);
                setImageNumber('image2');
              }}
              activeOpacity={0.5}
              style={[styles.blueBox, {borderWidth: image2 ? 0 : 2}]}>
              {image2 ? (
                <Image
                  source={{uri: image2}}
                  style={{height: '100%', width: '100%', borderRadius: 10}}
                />
              ) : (
                <AppIcon
                  Type={Icon.AntDesign}
                  name={'pluscircle'}
                  color={appColors.primaryColor}
                  size={26}
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setIsOpenImageSelectModal(!isOpenImageSelectModal);
                setImageNumber('image3');
              }}
              activeOpacity={0.5}
              style={[styles.greenBox, {borderWidth: image3 ? 0 : 2}]}>
              {image3 ? (
                <Image
                  source={{uri: image3}}
                  style={{height: '100%', width: '100%', borderRadius: 10}}
                />
              ) : (
                <AppIcon
                  Type={Icon.AntDesign}
                  name={'pluscircle'}
                  color={appColors.primaryColor}
                  size={26}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            width: '100%',
            gap: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              setIsOpenImageSelectModal(!isOpenImageSelectModal);
              setImageNumber('image4');
            }}
            activeOpacity={0.5}
            style={[styles.yellowBox, {borderWidth: image4 ? 0 : 2}]}>
            {image4 ? (
              <Image
                source={{uri: image4}}
                style={{width: '100%', height: '100%', borderRadius: 10}}
              />
            ) : (
              <AppIcon
                Type={Icon.AntDesign}
                name={'pluscircle'}
                color={appColors.primaryColor}
                size={26}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setIsOpenImageSelectModal(!isOpenImageSelectModal);
              setImageNumber('image5');
            }}
            activeOpacity={0.5}
            style={[styles.purpleBox, {borderWidth: image5 ? 0 : 2}]}>
            {image5 ? (
              <Image
                source={{uri: image5}}
                style={{width: '100%', height: '100%', borderRadius: 10}}
              />
            ) : (
              <AppIcon
                Type={Icon.AntDesign}
                name={'pluscircle'}
                color={appColors.primaryColor}
                size={26}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setIsOpenImageSelectModal(!isOpenImageSelectModal);
              setImageNumber('image6');
            }}
            activeOpacity={0.5}
            style={[styles.orangeBox, {borderWidth: image6 ? 0 : 2}]}>
            {image6 ? (
              <Image
                source={{uri: image6}}
                style={{height: '100%', width: '100%', borderRadius: 10}}
              />
            ) : (
              <AppIcon
                Type={Icon.AntDesign}
                name={'pluscircle'}
                color={appColors.primaryColor}
                size={26}
              />
            )}
          </TouchableOpacity>
        </View>

        <AppButton
          title="Next"
          style={{marginTop: '20%'}}
          onPress={handleSubmitImages}
        />
      </AppView>
      <ImageSelectModal
        isOpenImageSelectModal={isOpenImageSelectModal}
        onPickImagesFromGallery={pickImagesFromGallery}
        onTakeImageFromCamera={takeImageFromCamera}
        onRequestClose={() => setIsOpenImageSelectModal(false)}
        onPress={() => setIsOpenImageSelectModal(false)}
      />
    </>
  );
};

export default UploadPhotos;

const styles = StyleSheet.create({
  textContainer: {
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 20,
  },
  textsubcontainer: {
    fontWeight: 'bold',
    // color: appColors.Black_color,
    fontSize: 15,
    opacity: 0.5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  columnContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  redBox: {
    height: 210,
    width: '65%',
    backgroundColor: appColors.greenShade,
    borderRadius: 10,
    borderColor: appColors.primaryColor,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueBox: {
    height: 100,
    width: '90%',
    backgroundColor: appColors.greenShade,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: appColors.primaryColor,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenBox: {
    height: 100,
    width: '90%',
    backgroundColor: appColors.greenShade,
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: appColors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yellowBox: {
    height: 100,
    width: '31%',
    backgroundColor: appColors.greenShade,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: appColors.primaryColor,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  purpleBox: {
    height: 100,
    width: '31%',
    backgroundColor: appColors.greenShade,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: appColors.primaryColor,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'purple',
  },
  orangeBox: {
    height: 100,
    width: '31%',
    backgroundColor: appColors.greenShade,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: appColors.primaryColor,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  ModalViewContainer: {
    backgroundColor: appColors.modalbg,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '8%',
  },

  modalSubContent: {
    backgroundColor: appColors.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    borderRadius: 10,
  },
  modalImage: {
    height: '35%',
    width: '50%',
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
    width: '80%',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  editNameText: {
    color: appColors.BLACK,
    fontSize: 15,
    fontWeight: '500',
    marginTop: 10,
  },
});
