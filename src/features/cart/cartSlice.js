import { cartUpdate } from "@/lib/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : {
      cartItems: [],
      itemsPrice: 0,
      deliveryCharge: 0,
      totalPrice: 0,
    };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { product, qty } = payload;
      state.cartItems = [...state.cartItems, { product, qty }];
      cartUpdate(state);
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
