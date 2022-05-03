import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk('categories/getCategories', async () => {
    return fetch('https://fakestoreapi.com/products?limit=7').then((res) => res.json())
})

const apiSlice = createSlice({
    name:'categories',
    initialState: {
        list: []
    },

    extraReducers: {
        [getCategories.fulfilled]: (state,action) => {
            state.list.push(action.payload)
        }
    }

})



export default apiSlice.reducer