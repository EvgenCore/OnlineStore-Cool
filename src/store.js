import { configureStore } from "@reduxjs/toolkit";
import cartReduser from './features/cart/cartSlice'
import productsReducer from './features/products/productsSlice'
import favouritesReduser from './features/favourites/favouritesSlice'

const store = configureStore({
    reducer:{
        cart: cartReduser,
        products: productsReducer,
        favourites: favouritesReduser,
    }
})

export default store