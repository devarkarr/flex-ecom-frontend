import cartSlice from "@/features/cart/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    carts: cartSlice,
  },
});
