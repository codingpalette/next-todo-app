import { configureStore } from '@reduxjs/toolkit'
import {setupListeners} from "@reduxjs/toolkit/query";
import userReducer from './userStore'


export const store = configureStore({
  reducer: {
    user: userReducer,
  }
})

setupListeners(store.dispatch)

