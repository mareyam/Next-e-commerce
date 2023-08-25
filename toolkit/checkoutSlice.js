import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: [],

  reducers: {
    addProduct: (state, action) => {
      if(action.payload.isChecked) {
        state.push(action.payload);
      }
    },
    removeProduct: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addProduct, removeProduct } = checkoutSlice.actions;
export default checkoutSlice.reducer;
