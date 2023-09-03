import { createSlice } from '@reduxjs/toolkit';

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState: {
    products: [],
  },
  
  reducers: {
    sortByAscending: (state) => {
      state.products.sort((a, b) => a.price - b.price);
    },
    sortByDescending: (state) => {
      state.products.sort((a, b) => b.price - a.price);
      },
  },
});

export const { sortByAscending, sortByDescending } = sortingSlice.actions;
export default sortingSlice.reducer;
