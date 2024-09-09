import { configureStore } from "@reduxjs/toolkit";
import AuthorSlice from "./reducer/AuthorSlice";

export const Store = configureStore({
    reducer : {
        author: AuthorSlice
    }
})