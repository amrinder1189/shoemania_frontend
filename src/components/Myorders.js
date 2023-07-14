"use client";

import { useSelector, useDispatch } from "react-redux";

const Myorders = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      {user?.user?.products ? (
        user.user?.products.map((product) => (
          <div className="border w-3/4 m-1 rounded-lg p-2 flex ">
            <div>
              <img
                src={
                  product.product.data.attributes.thumbnail.data[0].attributes
                    .url
                }
                className="h-20"
              />
            </div>
            <div>
              <h4 className="font-semibold">
                {product.product.data.attributes.name}
              </h4>
              <h3 className="font-semibold">
                MRP {product.product.data.attributes.price} /-
              </h3>
            </div>
          </div>
        ))
      ) : (
        <p>You Have No orders right now</p>
      )}
    </>
  );
};

export default Myorders;
