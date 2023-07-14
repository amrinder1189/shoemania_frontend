"use client";
import { useSelector, useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { removeItemInCart } from "../Store/cartSlice";
import { useMemo, useState } from "react";
import { makePaymentRequest } from "../../utils/APIcall";

import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const CartPage = () => {
  const dispatch = useDispatch();
  const { isLoading, cart } = useSelector((state) => state.cart);
  const { isAuth } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const deletehandler = (product) => {
    dispatch(removeItemInCart(product));
  };

  const subtotal = useMemo(() => {
    return cart.reduce(
      (total, val) => total + parseInt(val.product.data.attributes.price),
      0
    );
  }, [cart]);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      const res = await makePaymentRequest("/api/orders", {
        products: cart,
      });
      await stripe.redirectToCheckout({
        sessionId: res.stripeSession.id,
      });
      console.log("-> res -->", res);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="">
      <h1 className="text-4xl font-bold  text-center">Shooping Cart</h1>
      <div className="flex mt-7 flex-col sm:flex-row md:flex-row ">
        <div className="flex-1 border flex p-2 m-2 rounded-xl ">
          <div className="flex border flex-col w-full rounded-xl ">
            {cart?.length ? (
              cart.map((item) => (
                <div className=" flex p-2 w-full">
                  <div className="p-2">
                    <img
                      src={
                        item.product.data.attributes.image.data[0].attributes
                          .url
                      }
                      className="h-32"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-xl font-bold">
                      {item.product.data.attributes.name}
                    </h4>
                    <p className="text-sm font-semibold">
                      MRP. {item.product.data.attributes.price}
                    </p>

                    <div>Size</div>
                    <div>Quanity : {item.quantity} </div>
                    <AiFillDelete onClick={() => deletehandler(item)} />
                  </div>
                </div>
              ))
            ) : (
              <p>Nothing in your Cart</p>
            )}
          </div>
        </div>

        <div className="flex-1 border m-3 p-2 rounded-xl bg-slate-100 ">
          <h2 className="text-xl font-semibold mt-4">
            Summary : MRP <span className="text-red-400">{subtotal}</span> /-
          </h2>
          <h2 className="text-xs  w-3/4 mt-5 font-semibold">
            The subtotal reflects the total price of your order, including
            duties and taxes, before any applicable discounts. It does not
            include delivery costs and international transaction fees.
          </h2>
          {isAuth ? (
            <button
              className="btn btn-dark border rounded-lg p-2 w-52 bg-black text-white"
              onClick={handlePayment}
            >
              CheckOut
            </button>
          ) : (
            <p className="border text-center bg-red-400 rounded-lg">
              You Need to Login First to checkout
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
