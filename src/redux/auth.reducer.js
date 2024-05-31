import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loggedIn: true,
  userData: null,
  isDarkMode: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    }, 
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setIsDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const {
  setLoggedIn,
  setUserData,
  setIsDarkMode,
} = authSlice.actions;

export default authSlice.reducer;
