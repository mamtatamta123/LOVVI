import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import appColors from '../../../utils/appColors';
import AppHeader from '../../../libComponents/AppHeader';
import AppStatusBar from '../../../libComponents/AppStatusBar';

const CookiePolicy = () => {

  return (
    <View style={styles.container}>
    
    <AppStatusBar isDark={false} isbg={false} />
        <AppHeader isBlack={true} isColor={true} />
    <ScrollView contentContainerStyle={styles.scrollView}>
     
      <View style={styles.contentContainer}>
      
<Text style={styles.mainHeading}>Cookie Policy</Text>
        <View>
          <Text style={styles.heading}>Cookie Policy</Text>
          <Text style={styles.textContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </Text>
          <Text style={styles.heading}>You already know everything there is to about cookies and just want to adjust your settings?</Text>
          <Text style={styles.textContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </Text>
          <Text style={styles.heading}> You want to know more about cookies and how we use them?</Text>
          <Text style={styles.textContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </Text>
          <Text style={styles.heading}>
        Point 1   </Text>
          <Text style={styles.textContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </Text>
          <Text style={styles.heading}>
          Point 2
          </Text>
          <Text style={styles.textContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </Text>
          <Text style={styles.heading}>
          Point 3
          </Text>
          <Text style={styles.textContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </Text>
          <Text style={styles.heading}>
          Point 4
          </Text>
          <Text style={styles.textContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </Text>
          <Text style={styles.heading}>
          Point 5
          </Text>
          <Text style={styles.textContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </Text>
          <Text style={styles.heading}>
          Point 6
          </Text>
          <Text style={styles.textContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </Text>
        </View>
      </View>
    </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: appColors.white,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    paddingBottom: 4,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  textContent: {
    color: appColors.BLACK,
    marginTop: 10,
  },
  heading: {
    color: appColors.primaryColor,
    fontSize: 16,
    marginTop: 10,
    fontWeight: '700',
  },
  mainHeading: {
    color: appColors.BLACK,
    fontSize: 16,
    marginTop: 10,
    fontWeight: '700',
  },
});

export default CookiePolicy;