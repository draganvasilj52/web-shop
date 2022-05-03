import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../features/dataSlice'
import apiReducer from '../features/apiSlice'

export const store = configureStore({
  reducer: {
    starter: dataReducer,
    listing: apiReducer
  },
})
