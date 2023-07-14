"use client";
import { useSelector, useDispatch } from "react-redux";
import {
  LoadedAddtoCartFailed,
  LoadedAddtoCart,
  LoadingAddtoCart,
} from "../Store/cartSlice";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Addtocartbtn = ({ product }) => {
  const notify = () => toast("Wow! Great Choice");

  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);

  const { isLoading, cart } = useSelector((state) => state.cart);

  const addtocarthandler = (product) => {
    dispatch(LoadingAddtoCart());
    dispatch(
      LoadedAddtoCart({
        product,
        oneQuantityPrice: product.data.attributes.price,
      })
    );
    notify();
  };

  const checkstatus = () => {
    const exist = cart?.find((p) => p.product.data.id === product.data.id);
    if (exist) {
      setStatus(true);
    }
    console.log(exist, "exist");
    console.log(status, "stat");
    console.log(product.data.id, "popopo");
  };

  useEffect(() => {
    checkstatus();
  }, []);

  console.log(isLoading, "isLaoding");
  console.log(status, "status");
  return (
    <>
      <button
        className="btn border text-sm p-2 text-white bg-black hover:font-bold overflow-hidden disabled:opacity-75 "
        onClick={() => addtocarthandler(product)}
      >
        {isLoading ? "Adding..." : "Add to Cart"}
      </button>
      <p className=" text-red-500 font-semibold">
        {status ? "I am  In Your Cart 😁" : ""}
      </p>
    </>
  );
};

export default Addtocartbtn;
