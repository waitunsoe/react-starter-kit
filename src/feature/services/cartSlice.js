import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  quantity: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isExisted = state.cartItems.find(
        (cartItem) => cartItem.id === payload.id
      );
      if (!isExisted) {
        state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];
        state.quantity++;
        state.totalAmount += payload.price;
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== payload.id
      );
      state.quantity--;
      state.totalAmount -= payload.price * payload.quantity;
    },
    increaseItemQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((cartItem) => {
        if (cartItem.id === payload.id) {
          const newQuantity = cartItem.quantity + 1;
          const newPrice = cartItem.price * newQuantity;
          return { ...cartItem, quantity: newQuantity, price: newPrice };
        } else {
          return { ...cartItem };
        }
      });
      state.quantity++;
      state.totalAmount += payload.price;
    },
    decreaseItemQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((cartItem) => {
        if (cartItem.id === payload.id) {
          const newQuantity = cartItem.quantity - 1;
          const newPrice = cartItem.price * newQuantity;
          return { ...cartItem, quantity: newQuantity, price: newPrice };
        } else {
          return { ...cartItem };
        }
      });
      state.quantity--;
      state.totalAmount -= payload.price;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
