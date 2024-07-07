import Link from "next/link"
import { Button } from "../ui/button"

const LandingPage = () => {
    return (
        <div>
            <div className="hero min-h-[100vh]  bg-no-repeat  bg-cover w-full h-screen  z-index-1 custom-image" >
                <div className="hero-content flex  text-center justify-end text-neutral-content">
                    <div className=" justify-center  text-right right-10  absolute bottom-40 mb-10  pt-40 items-center">
                        <h1 className="text-5xl font-bold  text-[rgb(255,255,255)] playfairdisplay mb-4">DETAILS DEFINE YOUR <br /> STYLE</h1>
                        <Link href="/products">
                        <Button className="bg-black">Find Your Style</Button>

                        </Link>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default LandingPage
