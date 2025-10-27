import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
  dataTheme: localStorage.getItem("dataTheme") || "light-mode",

};

const themeSettingSlice = createSlice({
  name: "themeSetting",
  initialState,
  reducers: {
    setDataTheme: (state, action) => {
      document.documentElement.setAttribute("class", action.payload);
      state.dataTheme = action.payload;
      localStorage.setItem("dataTheme", action.payload);
    },
  },
});

export const {
  setDataTheme,

} = themeSettingSlice.actions;

export default themeSettingSlice.reducer;
