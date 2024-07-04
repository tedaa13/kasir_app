import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/CategorySlice";
import productReducer from "../features/ProductSlice";
import cartReducer from "../features/CardSlice";

export const store = configureStore({
  reducer : {
    category: categoryReducer,
    products: productReducer,
    cart: cartReducer, 
  }
})

export default store;