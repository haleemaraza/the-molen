import ProductGridViewer from '@/components/Views/ProductGridViewer'
import { femaleProductsFromSanity } from '@/components/utils/apicalling'
import { allProductFetherFromSanityType } from '@/components/utils/types'

const Female = async() => {
    const data = await femaleProductsFromSanity() as allProductFetherFromSanityType
  return (
      <div>
        <ProductGridViewer ProductData={data.result} />
      </div>
  )
}

export default Female