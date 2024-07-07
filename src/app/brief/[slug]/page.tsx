

import BriefProducts from '@/components/Views/BriefProducts'
import ProductGridViewer from '@/components/Views/ProductGridViewer'
import { allProductFetherFromSanity, detailOfSingleProductFromSanity } from '@/components/utils/apicalling'
import { allProductFetherFromSanityType, singleProductType } from '@/components/utils/types'
import React, { Suspense } from 'react'

export async function generateStaticParams() {
    const data = await allProductFetherFromSanity() as allProductFetherFromSanityType
    return data.result.map((item:singleProductType) =>(
        { slug: item.slug.current}))
}

export async function generateMetadata( { params }: { params: { slug: string}}) {
    const slug = params.slug
    const data = await detailOfSingleProductFromSanity(slug) as allProductFetherFromSanityType
    // console.log("kajsioqjzi" ,data);    
    return {
        title: data.result[0].name,
       
    }
    
}
const Beirf = async({ params }: { params: { slug: string} }) => {
     
  return (
  <Suspense>
   <Detail slug={params.slug}/>

</Suspense>
  )
}
async function Detail({ slug }: { slug: string }) {
    const data = await Promise.all([detailOfSingleProductFromSanity(slug), allProductFetherFromSanity()]) as allProductFetherFromSanityType[];

    return <>
        <BriefProducts product={data[0].result[0]}  />
        <ProductGridViewer ProductData={data[1].result.slice(0, 3)} />
    </>
}
export default Beirf