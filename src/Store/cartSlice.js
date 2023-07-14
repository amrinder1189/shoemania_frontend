import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isLoading: false,
  error: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    LoadingAddtoCart: (state) => {
      state.isLoading = true;
    },
    LoadedAddtoCart: (state, action) => {
      const item = state.cart.find(
        (p) => p.product.data.id === action.payload.product.data.id
      );
      console.log(action.payload.product.data.id, "action.payload.product.id");

      if (item) {
        item.quantity++;
        item.product.data.attributes.price =
          item.oneQuantityPrice * item.quantity;
        console.log(item, "item present sir");
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));

      state.isLoading = false;
    },
    emptyCart: (state, action) => {
      state.cart = [];
      localStorage.removeItem("cart");
      state.isLoading = false;
    },
    LoadedAddtoCartFirstTime: (state, action) => {
      action.payload.map((item) => {
        state.cart.push(item);
      });
      console.log(action.payload, "first time run");
    },
    LoadedAddtoCartFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    removeItemInCart: (state, action) => {
      console.log(action.payload, "delete me");
      state.cart = state.cart.filter(
        (p) => p.product.data.id !== action.payload.product.data.id
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  LoadedAddtoCartFailed,
  LoadedAddtoCart,
  LoadingAddtoCart,
  LoadedAddtoCartFirstTime,
  removeItemInCart,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
