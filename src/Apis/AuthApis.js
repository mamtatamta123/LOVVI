import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from '../utils/baseUrl';
import {ErrorToast, SuccessToast} from 'react-native-toast-message';

export async function SignInApi(userData, setLoading) {
  setLoading(true);
  try {
    const response = await axios.post(`${baseUrl}/user-login`, userData);
    // await AsyncStorage.setItem('lovii_Token', response?.data?.data?.token);
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
