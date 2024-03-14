import { configureStore } from "@reduxjs/toolkit"; 
import authReducer from '../Features/auth/authSlice'
import tareaReducer from '../Features/tareas/tareaSlice'

export const store = configureStore({
    reducer: {
        auth : authReducer,
        tarea: tareaReducer
    }
}) 