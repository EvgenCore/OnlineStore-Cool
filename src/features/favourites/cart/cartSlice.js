import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state, action) =>{
            /* state.cart.push(action.payload) */
            const existingItem = state.cart.find(
                (item) => item.id === action.payload.id
            );

            if(existingItem){
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1})
            }
        },

        removeFromCart: (state, action) =>{
            const item = state.cart.find((item) => item.id === action.payload);
            if(item){
                state.cart = state.cart.filter((item) => item.id !== action.payload);
            }
        },

        incrementQuantity: (state, action) =>{
            const item = state.cart.find((item) => item.id === action.payload);
            if(item){
                item.quantity += 1
            }
        },

        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);

            if(item){
                if(item.quantity > 1){
                    item.quantity -= 1;
                }else{
                    state.cart = state.cart.filter((item) => item.id !== action.payload);
                }
            }
        }
    }
})

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer