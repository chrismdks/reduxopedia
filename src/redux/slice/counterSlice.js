import { createSlice } from "@reduxjs/toolkit";

const initialState = {count:0};

export const counterSlice = createSlice({
    name:"counter",
    initialState:initialState,
    reducers:{
        // all actions we want in our app, related to that particular slice (e.g. increment, decrement)
        // state: state of THIS slice, not of the store.
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }
    }
})

export const {increment,decrement} = counterSlice.actions; // export specific actions of reducer
export const counterReducer =  counterSlice.reducer; // export whole reducer