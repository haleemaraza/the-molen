import Footer from "@/components/Views/Footer";
import LandingPage from "@/components/Views/LandingPage";
import OurProduct from "@/components/Views/OurProduct";
import ProductGridViewer from "@/components/Views/ProductGridViewer";
import ShopDetails from "@/components/Views/ShopDetails";
import End from "@/components/Views/End";
import { allProductFetherFromSanity } from "@/components/utils/apicalling";
import { allProductFetherFromSanityType } from "@/components/utils/types";

export default async function Home() {
  let  data = await allProductFetherFromSanity() as allProductFetherFromSanityType
  
  return (
   <>
   <LandingPage />
   <OurProduct/>
   <ProductGridViewer ProductData={data.result.slice(11,14)} />
   <ShopDetails />
   <End />
   </>
  );
}
