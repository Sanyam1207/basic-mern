import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: {
    items: [],
  },

  name: "cart",
  reducers: {
    addToCart: (state, actions) => {
      const item = state.items.find((i) => i.id === actions.payload.id);
      if (item) {
        item.qty += 1;
      } else {
        state.items.push({ ...actions.payload, qty: 1 });
      }
    },
  },
  
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;