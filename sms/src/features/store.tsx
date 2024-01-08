import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'; 
import studentReducer from './studentSlice'; 
import teacherReducer from './teacherSlice';

const store = configureStore({
    reducer: { 
        auth: authReducer, 
        student: studentReducer, 
        teacher: teacherReducer
    }
})


export default store;