import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'red',
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
  // scrollView: {
  //   paddingBottom: 5,
  // },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  textContent: {
    // color: appColors.BLACK,
    marginTop: 10,
    textAlign: 'justify',
  },
  heading: {
    // color: appColors.primaryColor,
    fontSize: 16,
    marginTop: 10,
    fontWeight: '700',
  },
  mainHeading: {
    // color: appColors.BLACK,
    fontSize: 18,
    marginTop: 10,
    fontWeight: '700',
  },
});

export default styles;
