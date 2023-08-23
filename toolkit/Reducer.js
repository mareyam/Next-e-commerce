import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearCart: (state, action) => {
      state = [];
    },
  },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

// let persistedState = initialState;
// if (typeof window !== "undefined") {
//   persistedState = JSON.parse(localStorage.getItem("cart")) || initialState;
// }

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: persistedState,
//   reducers: {
//     addProduct: (state, action) => {
//       const updatedState = [...state, action.payload];
//       localStorage.setItem("cart", JSON.stringify(updatedState));
//       return updatedState;
//     },
//     removeProduct: (state, action) => {
//       console.log("Removing product:", action.payload);
//       const productIdToRemove = action.payload;
//       const updatedState = state.filter((product) => product.id !== productIdToRemove);
//       localStorage.setItem("cart", JSON.stringify(updatedState));
//       return updatedState;
//     },
//   },
// });

// export const { addProduct, removeProduct } = cartSlice.actions;
// export default cartSlice.reducer;

//
//
//
//
//
//
//
//
//
//
//

// addProduct: (state, action) => {
//   const updatedState = [...state, action.payload];
//   const cartItems = localStorage.getItem("cart");
//   const items = cartItems ? JSON.parse(cartItems) : [];
//   console.log({ items });
//   localStorage.setItem("cart", JSON.stringify([...items, action.payload]));
//   state = updatedState;
// },
// removeProduct: (state, action) => {
//   console.log("Removing product:", action.payload);
//   localStorage.removeItem(action.payload);
//   const updatedState = state.filter(
//     (product) => product.id !== action.payload
//   );
//   console.log("updated state is below");
//   console.log(updatedState);
//   localStorage.setItem("cart", JSON.stringify(updatedState));
//   state = updatedState;
// },
//
//
//
//

//add product:
// return [...state, action.payload];
// state.push(action.payload);

//remove product:
// return state.filter((product) => product.id !== action.payload);

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
