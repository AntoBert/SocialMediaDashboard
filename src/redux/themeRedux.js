import {createSlice} from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        lightMode: false,
    },
    reducers:{
        themeSwitch:(state)=> {
            state.lightMode = !state.lightMode;
        },
    },
})

export const {themeSwitch} = themeSlice.actions;
export default themeSlice.reducer;