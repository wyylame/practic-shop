import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "../interfaces/components";

export interface CounterState {
  products: ICartItem[];
}

const initialState: CounterState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ICartItem>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const index = state.products.findIndex(
        (item) => item.id === action.payload
      );

      console.log(index)

      state.products = [
        ...state.products.slice(0, index),
        ...state.products.slice(index + 1),
      ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;