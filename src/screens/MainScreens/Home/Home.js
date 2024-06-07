import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import appColors from '../../../utils/appColors';
import AppGradientView from '../../../libComponents/AppGradientView';

const Home = () => {
  return (
    <AppGradientView>
      <View style={styles.container}>
        <Swiper
          horizontalSwipe={true}
          verticalSwipe={false}
          cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
          renderCard={card => {
            return (
              <View
                style={{
                  height: '70%',
                  backgroundColor: appColors.white,
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderRadius: 18,
                  elevation: 5,
                }}>
                <View
                  style={{
                    height: '80%',

                    width: '100%',
                    backgroundColor: '#000',
                    borderRadius: 18,
                  }}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  {[1, 1, 1].map(() => {
                    return (
                      <TouchableOpacity
                        style={{
                          height: 60,
                          width: 60,
                          borderRadius: 40,
                          backgroundColor: appColors.secondoryColor,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}></TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            );
          }}
          onSwiped={cardIndex => {
            console.log(cardIndex);
          }}
          onSwipedAll={() => {
            console.log('onSwipedAll');
          }}
          cardIndex={0}
          backgroundColor={appColors.primaryColor}
          stackSize={3}
        />
      </View>
    </AppGradientView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.PrimaryGradient,
  },
});
