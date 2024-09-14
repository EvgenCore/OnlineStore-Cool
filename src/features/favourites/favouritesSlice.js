import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
    name:'favourites',
    initialState:{
        favourites:[],
    },
    reducers:{
        addToFavourites:(state, action) =>{
            /* state.cart.push(action.payload) */
            const existingItem = state.favourites.find(
                (item) => item.id === action.payload.id
            );

            if(existingItem){
                existingItem.quantity += 1;
            } else {
                state.favourites.push({ ...action.payload, quantity: 1})
            }
        },

        removeFromFavourites: (state, action) =>{
            const item = state.favourites.find((item) => item.id === action.payload);
            if(item){
                state.favourites = state.favourites.filter((item) => item.id !== action.payload);
            }
        },

        incrementQuantityFavourites: (state, action) =>{
            const item = state.favourites.find((item) => item.id === action.payload);
            if(item){
                item.quantity += 1
            }
        },

        decrementQuantityFavourites: (state, action) => {
            const item = state.favourites.find((item) => item.id === action.payload);

            if(item){
                if(item.quantity > 1){
                    item.quantity -= 1;
                }else{
                    state.favourites = state.favourites.filter((item) => item.id !== action.payload);
                }
            }
        }
    }
})

export const { addToFavourites, incrementQuantityFavourites, decrementQuantityFavourites, removeFromFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer