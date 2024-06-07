import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
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

const ChatScreen = ({navigation}) => {
  const [inputMessage, setInputMessage] = useState();
  const flatListRef = useRef(null);
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
        message:
          'Thank you. Could you also provide the time and place of birth?',
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
            <Text style={styles.titleText}>Jerom Hazeal</Text>
            <Text style={styles.titleText}>Online</Text>
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
          data={dummyChat}
          renderItem={({item}) => (
            <View
              style={[
                styles.mesageContainer,
                {
                  borderBottomLeftRadius: item.message.from === 'user' ? 0 : 10,
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
            </View>
          )}
        />
      </AppView>
      <View style={{backgroundColor: appColors.TextInput_BgColor}}>
        <TextInput
          value={inputMessage}
          onChangeText={setInputMessage}
          placeholder="Type a message..."
          placeholderTextColor={appColors.BLACK}
        />
      </View>
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
    color: appColors.Black_color,
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
    backgroundColor: appColors.white,
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
  button: {
    backgroundColor: appColors.white,
    marginBottom: '3%',
    marginTop: '20%',
    borderWidth: 1,
    borderColor: appColors.BLACK,
  },
  buttonSelected: {
    backgroundColor: appColors.secondoryColor,
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
    borderTopColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 5,
    gap: 6,
  },
});
