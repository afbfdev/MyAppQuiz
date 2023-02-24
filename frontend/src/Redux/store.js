import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../Redux/Reducers/UserReducer';

const Store = configureStore({
    reducer : {
        Users : userSlice
    }
})

export default Store;