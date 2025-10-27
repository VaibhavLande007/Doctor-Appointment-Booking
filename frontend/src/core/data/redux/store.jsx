import { configureStore } from '@reduxjs/toolkit';
import themeSettingSlice from './themeSettingSlice';


const store = configureStore({
  reducer: {
    themeSetting: themeSettingSlice
  },
});

export default store;