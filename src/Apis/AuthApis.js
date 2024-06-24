import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from '../utils/baseUrl';
import {ErrorToast, SuccessToast} from '../utils/Toasters';
import {routes} from '../utils/routes';

export async function SignInApi(userData, navigation, setLoading) {
  setLoading(true);
  try {
    const response = await axios.post(`${baseUrl}/user-login`, userData);
    await AsyncStorage.setItem('phoneNumber', userData.phone);
    await AsyncStorage.setItem('countryCode', userData.countryCode);
    setLoading(false);
    SuccessToast(response.data.message);
    navigation.navigate(routes.Otp_Verification_Screen);
    await AsyncStorage.setItem('lastVisitedRoute', routes.Login_Screen);
    return;
  } catch (error) {
    console.log('Error in Login Api:', error.response);
    setLoading(false);
    ErrorToast(error.response.data.message);
    return;
  }
}

export async function otpVerifyApi(userData, navigation, setLoading) {
  setLoading(true);
  console.log('userData', userData);
  try {
    const response = await axios.post(`${baseUrl}/verified-otp`, userData);
    console.log('response', response.data);
    await AsyncStorage.setItem('lovii_Token', response?.data?.token);
    setLoading(false);
    SuccessToast(response.data.message);
    navigation.navigate(routes.Email_Verification);
    await AsyncStorage.setItem('lastVisitedRoute', routes.Email_Verification);
    return;
  } catch (error) {
    console.log('Error in otpVerifyApi:', error.response);
    setLoading(false);
    ErrorToast(error.response.data.message);
    return;
  }
}

export async function resendOtpApi(userData, setTimer) {
  try {
    const response = await axios.post(`${baseUrl}/user-login`, userData);
    setTimer(120);
    SuccessToast(response.data.message);
    return;
  } catch (error) {
    console.log('Error in resendOtpApi:', error.response);
    ErrorToast(error.response.data.message);
    return;
  }
}

export async function uploadBase64ImageApi(data) {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await axios.post(`${baseUrl}/upload-base-64-image`, data, {
      headers,
    });
    console.log('response from uploadBase64ImageApi', response);
    return response;
  } catch (error) {
    console.log('Error in uploadBase64ImageApi', error.response);
    return null;
  }
}

export async function userProfileCompletionApi(
  userData,
  navigation,
  setLoading,
) {
  setLoading(true);
  try {
    const response = await axios.post(
      `${baseUrl}/user-profile-completion`,
      userData,
    );
    setLoading(false);
    SuccessToast(response.data.message);
    return;
  } catch (error) {
    console.log('Error in Login Api:', error.response);
    setLoading(false);
    ErrorToast(error.response.data.message);
    return;
  }
}
