import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOPedia } from "../action/actions";

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
    },
    incrementMultiplier: (state, action) => {
        state.count += Number(action.payload);
    },
    decrementMultiplier: (state, action) => {
        state.count -= Number(action.payload);
    }
  },
  extraReducers: (builder) => {
    // listen to a custom route
    builder.addCase(resetReduxOPedia.toString(), (state) => {
        state.count=0;
    })
  }
})

export const {increment,decrement,incrementMultiplier,decrementMultiplier} = counterSlice.actions; // export specific actions of reducer
export const counterReducer =  counterSlice.reducer; // export whole reducer