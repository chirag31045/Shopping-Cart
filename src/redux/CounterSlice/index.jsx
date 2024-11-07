import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice=createSlice({
    name:"counter",
    initialState:100,
    reducers:{
        increaseby1:(state)=>state+1,
        decreaseby1:(state)=>state-1,
        increaseby10:(state)=>state+10,
        decreaseby10:(state)=>state-10
    }
})

export const {increaseby1, decreaseby1, increaseby10, decreaseby10}=CounterSlice.actions

export default CounterSlice.reducer