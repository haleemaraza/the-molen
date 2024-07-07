'use client'

import { useState } from "react"
import { singleProductType } from "../utils/types"
import { urlForImage } from "../../../sanity/lib/image"
import Image from 'next/image'
import PortableText from "react-portable-text"


const BriefProducts = ({ product }: { product: singleProductType }) => {
    const [size, setsize] = useState<string>(product.size[0])
    const [activeImageUrl, setActiveImageUrl] = useState<string>(urlForImage(product.image.asset).url() as string)
    const descriptionContent = Array.isArray(product.description) ? product.description : [product.description];

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                   <div className="lg:w-1/2  w-full space-y-5">
                    <Image alt="productImage" width={500} height={500} className="lg:h-auto h-64 object-cover object-center rounded" src={activeImageUrl} />
          
                    </div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">The Molen</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 playfairdisplay">{product.name}</h1>
                        <div className="flex mb-4">
                        </div>
                        <PortableText className="leading-relaxed" content={descriptionContent} />
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3 text-lg">Size: </span>
                                {
                                    product.size.map((item, index) => (
                                        <button  key={index}
                                            className={`${size == item && "ring-2 ring-gray-900"}border-2 ml-1 text-black rounded-full w-10 h-10 focus:outline-none`}
                                            onClick={() => setsize(item)}
                                        >
                                            {item}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">{"$"}{product.price}{".00"}</span>
                            <button className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">Add to Cart</button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BriefProducts