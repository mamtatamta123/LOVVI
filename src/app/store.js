import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../redux/auth.reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
