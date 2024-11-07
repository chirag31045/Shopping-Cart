import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../counterSlice'
import CartSlice from "../CartSlice";

export const store = configureStore({
    reducer:{
    counter:counterSlice,
    cart:CartSlice
    }
})