import Link from "next/link";

const ProductHero = ({ data: { attributes: p, id } }) => {
  console.log(
    p.thumbnail.data[0].attributes.formats.thumbnail.url,
    "aa",
    p.name
  );
  return (
    <div className="h-5/6  w-56 p-2 inline-block m-2  overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
      <Link href={`/product/${id}`}>
        <img src={p.thumbnail.data[0].attributes.formats.small.url} alt />
      </Link>
      <p className="mr-2 text-sm font-semibold urb">{p.name}</p>
      <div className="flex  justify-between">
        <p className="mr-2 text-xs urb">Rs. {p.price}</p>
        <span className="text-xs urb text-green-400	">10% OFF</span>
      </div>
    </div>
  );
};

export default ProductHero;
