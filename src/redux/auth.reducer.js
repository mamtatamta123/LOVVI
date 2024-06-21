import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  userData: null,
  isDarkMode: true,
  currentAddress: null,
  useAddress: null,
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
    setCurrentAddress: (state, action) => {
      state.currentAddress = action.payload;
    },
    setUsedAddres: (state, action) => {
      state.useAddress = action.payload;
    },
  },
});

export const {
  setLoggedIn,
  setUserData,
  setIsDarkMode,
  setCurrentAddress,
  setUsedAddres,
} = authSlice.actions;
export default authSlice.reducer;
