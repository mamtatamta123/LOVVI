import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AppText from '../libComponents/AppText';
import AppButton from '../libComponents/AppButton';
import appColors from '../utils/appColors';
import AppStatusBar from '../libComponents/AppStatusBar';

const ImageSelectModal = ({
  onRequestClose,
  isOpenImageSelectModal,
  onPickImagesFromGallery,
  onTakeImageFromCamera,
  onPress,
}) => {
  return (
    <>
      <AppStatusBar backgroundColor="rgba(0, 0, 0, 0.5)" />
      <Modal
        visible={isOpenImageSelectModal}
        onRequestClose={onRequestClose}
        transparent={true}>
        <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
          <TouchableOpacity
            onPress={onPress}
            style={{flex: 1}}></TouchableOpacity>
          <View style={styles.mainContainer}>
            <View
              style={{
                paddingHorizontal: 20,
                paddingTop: 20,
                paddingBottom: 30,
                alignItems: 'center',
              }}>
              <AppText style={{fontSize: 18, fontWeight: 'bold'}}>
                Select Option
              </AppText>
              <View
                style={{
                  width: '100%',
                  paddingVertical: 30,
                }}>
                <AppButton
                  onPress={onTakeImageFromCamera}
                  title="Take photo"
                  style={{
                    width: '100%',
                    backgroundColor: appColors.white,
                    borderWidth: 1,
                  }}
                />
                <AppButton
                  onPress={onPickImagesFromGallery}
                  title="Choose from gallery"
                  style={{
                    width: '100%',
                    marginTop: 30,
                    backgroundColor: appColors.white,
                    borderWidth: 1,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ImageSelectModal;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    position: 'absolute',
    // backgroundColor: 'red',
    bottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: appColors.white,
    borderTopWidth: 0.6,
    borderRightWidth: 0.6,
    borderLeftWidth: 0.6,
    borderColor: appColors.Black_color,
  },
});
