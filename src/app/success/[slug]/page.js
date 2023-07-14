import Link from "next/link";
import axios from "axios";
import { FetchApiData } from "../../../../utils/APIcall";
import SaveProductDetail from "../../../components/SaveProductDetail";

const stripe = require("stripe")(process.env.NEXT_STRIPE_KEY);

const getData = async (slug) => {
  const session = await stripe.checkout.sessions.retrieve(slug);
  return session;
};

const getProducts = async (slug) => {
  const data = await FetchApiData(`/api/orders?filters[stripeId][$eq]=${slug}`);
  // console.log(data, "amrinder");
  return data;
};

const Success = async ({ params: { slug } }) => {
  const { status } = await getData(slug);
  const orderData = await getProducts(slug);

  // console.log(data, "data session");
  console.log(orderData, "order adat");

  return (
    <div className="min-h-[650px]   border flex justify-center items-center ">
      <div>
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
          <div className="text-2xl font-bold">Thanks for shopping with us!</div>
          <div className="text-lg font-bold mt-2">
            Your order has been placed successfully.
          </div>
          <div className="text-base mt-5">
            For any product related query, drop an email to
          </div>
          <div className="underline">samrinder1189@gmail.com</div>

          <Link href="/" className="font-bold mt-5">
            Continue Shopping
          </Link>
          <SaveProductDetail data={status} orderData={orderData} />
        </div>
      </div>
    </div>
  );
};

export default Success;
