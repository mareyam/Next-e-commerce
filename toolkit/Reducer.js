import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

let persistedState = initialState;
if (typeof window !== "undefined") {
  persistedState = JSON.parse(localStorage.getItem("cart")) || initialState;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: persistedState,
  reducers: {
    addProduct: (state, action) => {
      return [...state, action.payload];
    },
    removeProduct: (state, action) => {
      const productIdToRemove = action.payload;
      return state.filter((product) => product.id !== productIdToRemove);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cart: [],
//   },
//   reducers: {
//     addProduct: (state, action) => {
//       console.log({state:state.cart});
//       state.cart.push(action.payload);
//     },
// removeProduct: (state, action) => {
//   const productIdToRemove = action.payload;
//   return state.filter((product) => product.id !== productIdToRemove);
// },
//   },
// });

// export const { addProduct } = cartSlice.actions;
// export default cartSlice.reducer;

// state.client.products = [...state.client.products, action.payload]
