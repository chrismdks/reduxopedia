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
    ],
    destinationSelected: null
  }
};

export const destinationSlice = createSlice({
  name:"destination",
  initialState:initialState,
  reducers:{
    // all actions we want in our app, related to that particular slice (e.g. increment, decrement)
    // state: state of THIS slice, not of the store.
    destinationClicked: (state, action) => {
      state.destinationSelected = action.payload
    },
    resetDestination: (state)=>{
      state.destinationSelected=null;
    }
  }
})

export const {destinationClicked,resetDestination} = destinationSlice.actions; // export specific actions of reducer
export const destinationReducer =  destinationSlice.reducer; // export whole reducer