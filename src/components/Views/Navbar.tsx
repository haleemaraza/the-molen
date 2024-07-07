import Link from "next/link"
import { Button, buttonVariants } from "../ui/button"
import Image from 'next/image'
import { ShoppingCart } from "lucide-react"
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs"


interface navArray {
    label: string,
    href: string
}

const navArray: navArray[] = [
    {
        label: "Female",
        href: "/female",
    },
    {
        label: "Male",
        href: "/male",
    },
    {
        label: "Products",
        href: "/products",
    },
]

const Navbar = () => {


    return (
        <div>
            <header className="text-black text-xl body-font playfairdisplay">
                <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
                    <nav className="lg:flex hidden lg:w-2/5 flex-wrap items-center text-xl md:ml-auto space-x-10">
                        {navArray.map((item, index) => (
                            <Link key={item.href} href={item.href} className="cursor-pointer mr-5  hover:text-gray-900">{item.label}</Link>
                        ))}

                    </nav>
                    <Link className="cursor-pointer flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0" href={"/"}>
                        <Image src="/logo.png" alt="logo" width={150} height={150} className="" />
                    </Link>
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">

                        <div className="space-x-10 flex items-center ">

                            <ShoppingCart size={30} />

                            <SignedIn>
                                <UserButton />
                            </SignedIn>

                            <SignedOut>
                                <SignInButton />
                            </SignedOut>

                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar