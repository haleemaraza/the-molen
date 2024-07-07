import ProductCard from "../ui/ProductCard"
import { singleProductType } from "../utils/types"

const ProductGridViewer = async ({ ProductData }: { ProductData: Array<singleProductType> }) => {
  return (
    <div className="bg-white">
      <div className=" mt-20 mb-0 text-center">
        <p className="text-gray-400 ">Find your taste</p>
        </div>
      <div className="p-lmax-w-xl  sm:px-6 pr-10 sm:p lg:px-1">
        <div className="flex justify-center ">
          <h2 className="text-2xl font-bold tracking-tight playfairdisplay text-gray-900">
            Latest Fashion Statement
          </h2>
        </div>
        <div className="flex flex-wrap justify-center space-x-4 mt-4">
        {ProductData.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
      
        
      </div>
    </div>
  )
}

export default ProductGridViewer