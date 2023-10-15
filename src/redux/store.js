// redux store for application (1 store per app)
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice"; // whole reducer

export const store = configureStore({
    reducer: {
        // obj because we can have multiple reducers
        counterStore: counterReducer
    }
})
// check state
console.log(store.getState());
// call increment action:
store.dispatch({
    type: "counter/increment"
});
// check again
console.log(store.getState());