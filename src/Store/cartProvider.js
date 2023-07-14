"use client";
import store from "./store";
import { Provider } from "react-redux";
import React, { Children } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <ToastContainer />

      {children}
    </Provider>
  );
};

export default CartProvider;
