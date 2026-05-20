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
    <div className="group flex flex-col">
      <Link href={`/brief/${product.slug.current}`} className="block overflow-hidden">
        <Image
          className="w-full aspect-[3/4] object-cover bg-gray-100 transition-opacity duration-300 group-hover:opacity-80"
          src={urlForImage(product.image.asset).url()}
          alt={product.name}
          width={700}
          height={900}
        />
      </Link>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide truncate">
            {product.name}
          </h2>
          <p className="text-xs text-gray-400 mt-0.5 capitalize">{product.producttype}</p>
        </div>
        <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">${product.price}.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
