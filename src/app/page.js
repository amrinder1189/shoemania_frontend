import Crousal from "../components/Crousal";

import ProductHero from "../components/ProductHero";
import { FetchApiData } from "../../utils/APIcall";
import { strapi_token } from "../../utils/url";

async function getData() {
  const products = await FetchApiData("/api/products?populate=*");

  return products;
}

export default async function Home() {
  const product = await getData();
  console.log(product, "amr");
  return (
    <div className="">
      <Crousal />
      <div className="h-auto border w-4/5 mx-auto flex flex-wrap  justify-center items-center	">
        {product.data?.map((item) => (
          <ProductHero data={item} />
        ))}
      </div>
    </div>
  );
}
