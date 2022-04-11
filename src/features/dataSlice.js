import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [
    'Collectibles & Art',
    'Home&Garden',
    'Sporting goods',
    'Electronics',
    'Fashion',
    'Toys & hobbies',
    'Musical Instruments & gear',
    'Health & Beauty',
  ],
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
})

export default dataSlice.reducer
