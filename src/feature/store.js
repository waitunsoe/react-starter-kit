import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./services/counterSlice";
import cartSlice from "./services/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
  },
});
