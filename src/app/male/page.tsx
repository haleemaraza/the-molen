import ProductGridViewer from '@/components/Views/ProductGridViewer'
import { maleProductsFromSanity } from '@/components/utils/apicalling'
import { allProductFetherFromSanityType } from '@/components/utils/types'

const Male = async() => {
    const data = await maleProductsFromSanity() as allProductFetherFromSanityType
  return (
      <div>
        <ProductGridViewer ProductData={data.result}/>
      </div>
  )
}

export default Male