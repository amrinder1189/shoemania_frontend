import { FetchApiData } from "../../../../utils/APIcall";
import ProductCrousal from "../../../components/ProductCrousal";
import Addtocartbtn from "../../../components/Addtocartbtn";

async function getData(slug) {
  const products = await FetchApiData(`/api/products/${slug}?populate=*`);

  return products;
}

const Product = async ({ params: { slug } }) => {
  const data = await getData(slug);
  console.log("ame--", data, "amr---");

  console.log(slug, "param param");
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-1  flex justify-center sm:justify-start  	">
        <ProductCrousal images={data.data.attributes.image.data} />
      </div>
      <div className="flex-1 flex flex-col justify-center items-start  h-screen  ">
        <h3 className=" text-4xl font-bold  ">{data.data.attributes.name}</h3>
        <h4 className="text-lg  mb-2">{data.data.attributes.subtitle}</h4>
        <div className="flex  w-96 justify-between">
          <p className="osw font-semibold">
            MRP {data.data.attributes.price}
            <span className="font-normal ml-2 osw">incl. all taxes</span>
          </p>
          <p className="osw text-lime-600">10% OFF</p>
        </div>
        <h1 className="osw font-semibold"> Size :</h1>
        <div className="flex  w-3/4 flex-wrap  ">
          {data.data.attributes.size.data.map((item) => (
            <div className="border h-8 w-20 flex justify-center items-center text-xs text-black cursor-pointer  hover:text-red-700	  p-2 rounded-sm m-2 font-semibold">
              {item.size}
            </div>
          ))}
        </div>

        <div>
          <Addtocartbtn product={data} />
        </div>

        <div className="mt-3  w-4/5 text-sm usb ">
          {data.data.attributes.description}
        </div>
      </div>
    </div>
  );
};

export default Product;
