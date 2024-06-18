import {Platform} from 'react-native';
import Toast from 'react-native-toast-message';

export const SuccessToast = title => {
  Toast.show({
    text1: title,
    type: 'success',
    position: Platform.OS === 'ios' ? 'bottom' : 'top',
  });
};

export const ErrorToast = title => {
  Toast.show({
    text1: title,
    type: 'error',
    position: Platform.OS === 'ios' ? 'bottom' : 'top',
  });
};
