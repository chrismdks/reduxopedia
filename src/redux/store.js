// redux store for application (1 store per app)
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        // obj because we can have multiple reducers
    }
})