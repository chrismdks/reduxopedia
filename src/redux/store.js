// redux store for application (1 store per app)
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice"; // whole reducer

export const store = configureStore({
    reducer: {
        // obj because we can have multiple reducers
        counter: counterReducer
    }
})
console.log(store);