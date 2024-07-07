import ProductGridViewer from "@/components/Views/ProductGridViewer"
import { allProductFetherFromSanity } from "@/components/utils/apicalling"
import { allProductFetherFromSanityType } from "@/components/utils/types"

 
 const Products = async() => {
    let data = await allProductFetherFromSanity() as allProductFetherFromSanityType
   return (
     <>
        <ProductGridViewer ProductData={data.result} />
     </>
   )
 }
 
 export default Products