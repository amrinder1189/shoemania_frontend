import { Api_Url, strapi_token } from "./url";

export const FetchApiData = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + strapi_token,
    },
  };

  // console.log(Api_Url, "aa");
  const res = await fetch(`${Api_Url}${endpoint}`, options);
  const data = res.json();

  // console.log(res, "res");
  // console.log(data, "data");

  return data;
};

export const makePaymentRequest = async (endpoint, payload) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${strapi_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  const res = await fetch(`${Api_Url}${endpoint}`, options);
  const data = await res.json();
  console.log(res, "res data");
  console.log(data, "stripe data");
  // console.log(process.env.NEXT_PUBLIC_NEXT_STRAPI_TOKEN, "bearer");
  return data;
};
