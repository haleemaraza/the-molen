import ProductCard from "../ui/ProductCard"
import { singleProductType } from "../utils/types"

const ProductGridViewer = async ({ ProductData }: { ProductData: Array<singleProductType> }) => {
  return (
    <div className="bg-white px-4 sm:px-6 lg:px-10">
      <div className="mt-20 mb-4 text-center">
        <p className="text-gray-400 text-sm tracking-widest uppercase">Find your taste</p>
        <h2 className="text-2xl font-bold tracking-tight playfairdisplay text-gray-900 mt-1">
          Latest Fashion Statement
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
        {ProductData.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </div>
  )
}

export default ProductGridViewer
