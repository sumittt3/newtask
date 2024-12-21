import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Components/authSlice.js"
const store = configureStore({
    reducer: {
        data: authReducer,
    }
})
export default store