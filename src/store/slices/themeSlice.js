import { createSlice } from "@reduxjs/toolkit";
import CONSTANTS from "../../constants";

const { THEME } = CONSTANTS;

const initialState = {
    theme: THEME.LIGHT
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        switchTheme: (state) => (state === THEME.DARK ? THEME.LIGHT : THEME.DARK)
    }
})

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;