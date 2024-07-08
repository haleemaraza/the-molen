import { FC } from "react";
import { singleProductType } from "../utils/types";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { allProductFetherFromSanity } from '../utils/apicalling';


const ProductCard: FC<{ product: singleProductType }> = ({ product }) => {
  if (!product || !product.slug || !product.slug.current || !product.image || !product.image.asset) {
    return null; 
  }

  return (
    <div className="lg:1/3 rounded-lg shadow-md  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 mt-10"> 
      <Link href={`/brief/${product.slug.current}`}>
        <Image
          className="w-full h-full object-cover object-bottom bg-gray-200 group-hover:opacity-75"
          src={urlForImage(product.image.asset).url()}
          alt={product.name}
          width={700}
          height={700}
        />
      </Link>
      <div className="flex justify-between">
        <div className="p">
          <h2 className="text-gray-800 font-bold">
            {product.name}
          </h2>
          <p className="text-gray-500 text-sm">{product.producttype}</p>
        </div>
        <p>${product.price}.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
