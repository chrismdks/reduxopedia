import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  return {
    destinations: [
      {
          name: "Hong Kong",
          days: 7,
          fact: "World's longest covered escalator"
      },
      {
          name: "Japan",
          days: 10,
          fact: "Japan is mostly mountains"
      },
      {
          name: "New Zealand",
          days: 14,
          fact: "Last country in the world to be inhabited by humans"
      }
    ]
  }
};

export const destinationSlice = createSlice({
  name:"destination",
  initialState:initialState,
  reducers:{
    // all actions we want in our app, related to that particular slice (e.g. increment, decrement)
    // state: state of THIS slice, not of the store.
    
  }
})

//export const {increment,decrement,incrementMultiplier,decrementMultiplier} = counterSlice.actions; // export specific actions of reducer
export const destinationReducer =  destinationSlice.reducer; // export whole reducer