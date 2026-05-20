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
            <header className="text-black body-font playfairdisplay">
                <div className="container mx-auto flex flex-row items-center justify-between px-4 py-3">
                    {/* Left: nav links desktop only */}
                    <nav className="hidden lg:flex lg:w-2/5 items-center space-x-8 text-base">
                        {navArray.map((item) => (
                            <Link key={item.href} href={item.href} className="hover:text-gray-500 transition-colors">{item.label}</Link>
                        ))}
                    </nav>

                    {/* Center: Logo */}
                    <Link className="flex items-center justify-center flex-1 lg:flex-none lg:w-1/5" href="/">
                        <Image src="/logo.png" alt="logo" width={120} height={120} className="w-28 lg:w-36" />
                    </Link>

                    {/* Right: icons */}
                    <div className="flex items-center space-x-5 lg:w-2/5 lg:justify-end">
                        <ShoppingCart size={24} className="cursor-pointer" />
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
