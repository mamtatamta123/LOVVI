import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  Modal,
} from 'react-native';
import appColors from '../../../utils/appColors';
import {
  responsiveWidth as wp,
  responsiveFontSize as fp,
  responsiveHeight as hp,
} from 'react-native-responsive-dimensions';

import AppGradientView from '../../../libComponents/AppGradientView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppView from '../../../libComponents/AppView';
import AppText from '../../../libComponents/AppText';
import {configureLayoutAnimationBatch} from 'react-native-reanimated/lib/typescript/reanimated2/core';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import EmojiSelector, {Categories} from 'react-native-emoji-selector';
import {FadeIn} from 'react-native-reanimated';
import {TriggerType} from '@notifee/react-native';
import Feather from 'react-native-vector-icons/Feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {useSelector} from 'react-redux';

const dummyChat = [
  {
    id: '1',
    message: {
      sender: 'user1',
      me: 'me',
      message: 'Hello, how can I help you?',
      from: 'me',
    },
  },
  {
    id: '2',
    message: {
      sender: 'user1',
      me: 'me',
      message: 'I need some advice regarding my career.',
      from: 'user',
    },
  },
  {
    id: '3',
    message: {
      sender: 'user1',
      me: 'me',
      message: 'Sure, please tell me your birth details.',
      from: 'me',
    },
  },
  {
    id: '4',
    message: {
      sender: 'user1',
      me: 'me',
      message: 'I was born on April 5, 1990.',
      from: 'user',
    },
  },
  {
    id: '5',
    message: {
      sender: 'user1',
      me: 'me',
      message: 'Thank you. Could you also provide the time and place of birth?',
      from: 'me',
    },
  },
  {
    id: '6',
    message: {
      sender: 'user1',
      me: 'me',
      message: 'I was born at 2:30 PM in New York.',
      from: 'user',
    },
  },
  {
    id: '7',
    message: {
      sender: 'user1',
      me: 'me',
      message: 'Great, let me analyze your chart. Please wait a moment.',
      from: 'me',
    },
  },
  {
    id: '8',
    message: {
      sender: 'user1',
      me: 'me',
      message: 'Sure, take your time.',
      from: 'user',
    },
  },
  {
    id: '9',
    message: {
      sender: 'user1',
      me: 'me',
      message:
        'Based on your birth details, it looks like you have a strong career in the arts or communication.',
      from: 'me',
    },
  },
  {
    id: '10',
    message: {
      sender: 'user1',
      me: 'me',
      message:
        'That sounds interesting! I have been thinking about pursuing a career in writing.',
      from: 'user',
    },
  },
  {
    id: '11',
    message: {
      sender: 'user1',
      me: 'me',
      message:
        'That’s a good choice. Your chart shows strong potential in creative fields.',
      from: 'me',
    },
  },
  {
    id: '12',
    message: {
      sender: 'user1',
      me: 'me',
      message: 'Thank you for the guidance. I feel more confident now.',
      from: 'user',
    },
  },
  {
    id: '13',
    message: {
      sender: 'user1',
      me: 'me',
      message: 'You’re welcome! Do you have any other questions?',
      from: 'me',
    },
  },
  {
    id: '14',
    message: {
      sender: 'user1',
      me: 'me',
      message: 'Not at the moment. Thanks again!',
      from: 'user',
    },
  },
  {
    id: '15',
    message: {
      sender: 'user1',
      me: 'me',
      message: 'My pleasure. Have a great day!',
      from: 'me',
    },
  },
];

const ChatScreen = ({navigation}) => {
  const [inputMessage, setInputMessage] = useState('');
  const flatListRef = useRef(null);
  const [isEmojiSelectorVisible, setEmojiSelectorVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [image1, setSelectedImage1] = useState('');
  const [allmessages, setAllmessages] = useState(dummyChat);
  const isarkMode = useSelector(state => state.auth.isDarkMode);

  // useEffect(() => {
  //   setAllmessages(pre => console.log('pre----', pre));
  // }, []);

  const handleEmojiSelected = emoji => {
    console.log(emoji);
    setEmojiSelectorVisible(false);
  };

  const pickImagesFromGallery = () => {
    ImagePicker.openPicker({
      width: 1000,
      height: 1000,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setSelectedImage1(image.path);

        setModalVisible(false);
      })
      .catch(error => {
        setModalVisible(false);
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
        setModalVisible(false);
        setSelectedImage1(image.path);
      })
      .catch(error => {
        setModalVisible(false);
        console.log('Error taking image: ', error);
      });
  };

  const openDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log('Document Response: ', res);
      setModalVisible(false);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled document picker');
      } else {
        console.log('Document Picker Error: ', err);
      }
      setModalVisible(false);
    }
  };

  const sendMessage = () => {
    const data = {
      message: {
        message: inputMessage,
        from: 'me',
      },
    };
    setAllmessages(pre => [...pre, data]);
  };

  return (
    <AppGradientView
      style={{height: '100%'}}
      colors={appColors.PrimaryGradient2}>
      <AppStatusBar />
      <AppHeader />
      <View style={styles.infoContainer}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: 'red',
            }}>
            <Image
              source={require('../../../assets/Images/profile.png')}
              style={{height: 50, width: 50}}
            />
          </View>
          <View style={{}}>
            <AppText style={styles.titleText}>Jerom Hazeal</AppText>
            <AppText style={styles.titleText}>Online</AppText>
          </View>
        </View>
      </View>
      <AppView style={styles.formContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 10}}
          ref={flatListRef}
          onContentSizeChange={() =>
            flatListRef.current.scrollToEnd({animated: true})
          }
          keyExtractor={item => item.id}
          style={styles.messagesList}
          data={allmessages}
          renderItem={({item}) => (
            console.log('item', item),
            (
              <View
                style={[
                  styles.mesageContainer,
                  {
                    borderBottomLeftRadius:
                      item.message.from === 'user' ? 0 : 10,
                    borderBottomRightRadius:
                      item.message.from === 'user' ? 10 : 0,
                    backgroundColor:
                      item.message.from === 'user'
                        ? appColors.white
                        : appColors.primaryColor,
                    borderRadius: 5,
                    alignSelf:
                      item.message.from === 'user' ? 'flex-start' : 'flex-end',
                  },
                ]}>
                <Text
                  style={{
                    fontSize: 16,
                    color:
                      item.message.from === 'user'
                        ? appColors.BLACK
                        : appColors.white,
                  }}>
                  {item?.message?.message}
                </Text>

                <Text
                  style={{
                    fontSize: 13,
                    color:
                      item.message.from === 'user'
                        ? appColors.BLACK
                        : appColors.white,
                  }}>
                  {'12:10 PM'}
                </Text>
              </View>
            )
          )}
        />

        <View style={styles.inputContainer}>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.emojiButton}
              onPress={() => setEmojiSelectorVisible(true)}>
              <Text style={styles.emojiText}>😀</Text>
            </TouchableOpacity>

            {/* ============emoji modal====================================================== */}
            <Modal
              visible={isEmojiSelectorVisible}
              transparent={true}
              animationType="slide"
              onRequestClose={() => setEmojiSelectorVisible(false)}>
              <View style={styles.modalContainer}>
                <EmojiSelector
                  category={Categories.symbols}
                  onEmojiSelected={handleEmojiSelected}
                  showSearchBar={true}
                  columns={10}
                  // columns={10}
                  showHistory={true}
                  // emojiStyle={styles.emoji}
                />
              </View>
            </Modal>
          </View>

          {/* =========================== attachment modal================================ */}

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <AppIcon
              Type={Icon.Entypo}
              name={'attachment'}
              color={appColors.DARK_GRAY}
              size={20}
            />
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                elevation: 10,
              }}>
              <View
                style={{
                  backgroundColor: appColors.TextInput_BgColor,
                  alignItems: 'center',
                  paddingHorizontal: 70,
                  paddingVertical: 10,
                }}>
                <Text
                  style={{
                    color: appColors.Black_color,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  Select Option
                </Text>

                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={takeImageFromCamera}>
                  <Text style={styles.textStyle}>Open Camera</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={pickImagesFromGallery}>
                  <Text style={styles.textStyle}>Open Gallery</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={openDocument}>
                  <Text style={styles.textStyle}>Attach Document</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/* ============================================================================================== */}

          <TextInput
            style={styles.input}
            value={inputMessage}
            onChangeText={setInputMessage}
            placeholder="Type a message..."
            placeholderTextColor={appColors.IconColor}
          />

          <TouchableOpacity
            onPress={sendMessage}
            disabled={!inputMessage}
            style={[
              styles.sendButton,
              {
                backgroundColor: inputMessage
                  ? appColors.Green_color
                  : appColors.grayShade,
              },
            ]}>
            <AppIcon
              Type={Icon.Feather}
              name="send"
              color={appColors.Black_color}
              size={15}
            />
          </TouchableOpacity>
        </View>
      </AppView>
    </AppGradientView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  infoContainer: {
    paddingHorizontal: 15,
    paddingVertical: '8%',
  },
  titleText: {
    // color: appColors.Black_color,
    fontSize: 24,
    fontWeight: '900',
    // width: '70%',
    marginHorizontal: 5,
  },
  subtitleText: {
    color: appColors.Black_color,
    fontSize: 15,
    fontWeight: '500',
    opacity: 0.6,
    marginTop: 7,
  },
  formContainer: {
    // backgroundColor: appColors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 2,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  cardContainer: {
    height: 132,
    width: '32%',
    backgroundColor: appColors.TextInput_BgColor,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginTop: 10,
    borderColor: appColors.TextInput_BgColor,
  },
  selectedCard: {
    borderColor: appColors.primaryColor,
  },
  cardImage: {
    height: 40,
    width: 40,
  },
  cardTitle: {
    fontSize: 12,
  },

  mesageContainer: {
    maxWidth: '80%',
    paddingVertical: 8,
    marginVertical: 9,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 5,
    gap: 6,
  },
  input: {
    borderRadius: 30,
    // flex: 1,
    borderWidth: 0.8,
    borderColor: appColors.DARK_GRAY,
    paddingHorizontal: 25,
    color: appColors.BLACK,
    fontSize: 16,
    backgroundColor: appColors.white,
    width: '70%',
  },
  sendButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emojiButton: {
    // padding: 6,
    // backgroundColor: '#ccc',
    // borderRadius: 50,
    backgroundColor: appColors.grayShade,
    height: 25,
    width: 25,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiText: {
    fontSize: 15,
    color: appColors.white,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
  },

  centeredView: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 22,
    position: 'absolute',
    bottom: '10%',
    // paddingHorizontal: 40,
  },

  optionButton: {
    backgroundColor: appColors.secondoryColor,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',

    optionButton: {
      backgroundColor: 'red',
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginVertical: 5,
      width: '100%',
      alignItems: 'center',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize: 18,
    },
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
});
