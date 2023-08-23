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

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     products: [],
//     totalAmount: 0,
//     totalProducts: 0,
//   },
//   reducers: {
//     addProduct: (state, action) => {
//       state.products.push(action.payload);
//       state.totalProducts++;
//       state.totalAmount += action.payload.price;
//     },
//     removeProduct: (state, action) => {
//       const indexToRemove = state.products.findIndex(
//         (product) => product.id === action.payload
//       );
//       if (indexToRemove !== -1) {
//         state.products.splice(indexToRemove, 1);
//         state.totalProducts--;
//         state.totalAmount -= action.payload.price;
//       }
//     },
//     clearCart: (state, action) => {
//       state.products = [];
//       state.totalProducts = 0;
//       state.totalAmount = 0;
//     },
//     getProductsAmount: (state, action) => {
//       return state.totalAmount;
//     },
//     getProductsCount: (state, action) => {
//       return state.totalProducts;
//     },
//   },
// });

// export const {
//   addProduct,
//   removeProduct,
//   clearCart,
//   getProductsAmount,
//   getProductsCount,
// } = cartSlice.actions;
// export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: [],

//   reducers: {
//     addProduct: (state, action) => {
//       const updatedState = [...state, action.payload];
//       console.log("updated is ")
//       console.log(updatedState)
//       return updatedState;
//     },
//     removeProduct: (state, action) => {
//       const updatedState = state.filter((item) => item.id !== action.payload);
//       console.log("updated is ")
//       console.log(updatedState)
//       return updatedState;
//     },
//     clearCart: (state, action) => {
//       state = null
//       console.log("state is ")
//       console.log(state)
//       return state;
//     },
//   },
// });

// export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;
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
