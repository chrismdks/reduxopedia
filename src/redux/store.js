// redux store for application (1 store per app)
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice"; // whole reducer
import { destinationReducer } from "./slice/destinationSlice";

export const store = configureStore({
    reducer: {
        // obj because we can have multiple reducers
        counterStore: counterReducer,
        destinationStore: destinationReducer
    }
})

console.log(store.getState())