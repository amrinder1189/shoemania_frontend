"use client";

import { useSelector, useDispatch } from "react-redux";
import { Api_Url, strapi_token } from "../../utils/url";
import { UpdatingUser } from "../Store/userStore";
import { emptyCart } from "../Store/cartSlice";
import axios from "axios";
const SaveProductDetail = ({ data, orderData }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const payload = {
    products: JSON.stringify(orderData.data[0].attributes.products),
  };

  const product = { name: "amrinder" };

  //   const payload = {
  //     products: product,
  //   };

  const updateUser = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${strapi_token}`,
      },
    };
    const userr = await fetch(
      Api_Url + `/api/users/${user?.user?.id}`,
      options
    );
    const data = await userr.json();

    return data;
  };

  const SavingUserData = async (data, payload) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${strapi_token}`,
        // "Content -Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    if (data === "complete") {
      const updatedData = await fetch(
        `${Api_Url}/api/users/${user?.user?.id}`,
        options
      );

      const updatedu = await updateUser();
      console.log(updatedu, "update duuu");
      const dataa = { jwt: "nothing", user: updatedu };
      dispatch(UpdatingUser(dataa));
      dispatch(emptyCart());
      console.log(updatedData, "checking......");
      console.log(JSON.stringify(payload), "pauload......");
    }
  };

  SavingUserData(data, payload);
  console.log(orderData);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default SaveProductDetail;
