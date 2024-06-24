import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import appColors from '../../../utils/appColors';
import AppButton from '../../../libComponents/AppButton';
import AppGradientView from '../../../libComponents/AppGradientView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppView from '../../../libComponents/AppView';
import AppText from '../../../libComponents/AppText';
import {routes} from '../../../utils/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CardScreen = ({navigation}) => {
  const [selectedCardItem, setSelectedCardItem] = useState('');
  console.log('selectedCardItem', selectedCardItem);

  const cardArr = [
    {
      id: 1,
      image: require('../../../assets/Images/Heart.png'),
      title: 'Long-term Partner',
    },
    {
      id: 2,
      image: require('../../../assets/Images/Love.png'),
      title: 'Long-term, but short-term Ok',
    },
    {
      id: 3,
      image: require('../../../assets/Images/champagne.png'),
      title: 'Long-term, but short-term Ok',
    },
    {
      id: 4,
      image: require('../../../assets/Images/confetti.png'),
      title: 'Short-term Partner',
    },
    {
      id: 5,
      image: require('../../../assets/Images/bye.png'),
      title: 'New friends',
    },
    {
      id: 6,
      image: require('../../../assets/Images/thinking.png'),
      title: 'Still figuring it out',
    },
  ];

  useEffect(() => {
    const getLookingFor = async () => {
      const cardItem = await AsyncStorage.getItem('lookingFor');
      console.log('cardItem', cardItem);
      if (cardItem) {
        setSelectedCardItem(cardItem);
      }
    };
    getLookingFor();
  }, []);

  const handleCard = async () => {
    await AsyncStorage.setItem('lookingFor', String(selectedCardItem));
    navigation.navigate(routes.Distance_Range_Screen);
    await AsyncStorage.setItem(
      'lastVisitedRoute',
      routes.Distance_Range_Screen,
    );
  };

  return (
    <AppGradientView
      style={{height: '100%'}}
      colors={appColors.PrimaryGradient2}>
      <AppStatusBar />
      <AppHeader isBack={routes.Interested_Gender} />
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>Who are you</Text>
          <Text style={styles.titleText}>looking for?</Text>
          <AppText style={styles.subtitleText}>
            All good if it changes. There's something for everyone
          </AppText>
        </View>

        <AppView style={styles.formContainer}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 6,
              paddingVertical: 10,
              justifyContent: 'space-between',
            }}>
            {cardArr.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.cardContainer,
                  {
                    borderWidth: item?.id == selectedCardItem ? 1.5 : 0,
                    borderColor:
                      selectedCardItem == item.id
                        ? appColors.primaryColor
                        : null,
                  },
                ]}
                onPress={() => setSelectedCardItem(item.id)}>
                <Image source={item.image} style={styles.cardImage} />
                <AppText style={styles.cardTitle}>{item.title}</AppText>
              </TouchableOpacity>
            ))}
          </View>

          <AppButton
            disabled={selectedCardItem ? false : true}
            style={[
              styles.button,
              {
                backgroundColor: selectedCardItem
                  ? appColors.secondoryColor
                  : appColors.white,
                borderWidth: selectedCardItem ? 0 : 1,
              },
            ]}
            title={'Next'}
            onPress={handleCard}
          />
        </AppView>
      </ScrollView>
    </AppGradientView>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  infoContainer: {
    paddingHorizontal: 15,
    paddingVertical: '8%',
  },
  titleText: {
    color: appColors.Black_color,
    fontSize: 24,
    fontWeight: '900',
    width: '70%',
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
  // button: {
  //   backgroundColor: appColors.white,
  //   marginBottom: '3%',
  //   marginTop: '20%',
  //   borderWidth: 1,
  //   borderColor: appColors.BLACK,
  // },
  buttonSelected: {
    backgroundColor: appColors.secondoryColor,
  },
});
