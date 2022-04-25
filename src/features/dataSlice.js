import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [
    'Electronics',
    'Fashion',
    'Health & Beauty',
    'Collectibles & Art',
    'Home&Garden',
    'Sports',
    'Xiaomi',
  ],
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
})

export default dataSlice.reducer
