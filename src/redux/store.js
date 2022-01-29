import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeRedux";


export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
})