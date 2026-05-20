import Link from "next/link"
import { Button } from "../ui/button"

const LandingPage = () => {
    return (
        <div className="custom-image bg-no-repeat bg-cover w-full min-h-screen flex flex-col justify-end">
            <div className="px-6 pb-16 sm:pb-24 text-center sm:text-right sm:pr-16">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white playfairdisplay mb-6 leading-tight">
                    DETAILS DEFINE<br />YOUR STYLE
                </h1>
                <Link href="/products">
                    <Button className="bg-black text-white px-8 py-3 text-base">Find Your Style</Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage
