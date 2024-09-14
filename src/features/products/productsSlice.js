import { createSlice } from "@reduxjs/toolkit";

import data from '../../data/dataBase.json'


const productsSlice = createSlice({
    name: 'products',
    initialState:{
        products: data,
        searchQuery: '',
    },
    reducers:{
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
})


export const { setSearchQuery } = productsSlice.actions;
export default productsSlice.reducer;