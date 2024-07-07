import React from 'react'
import Image from 'next/image'
import Buy from '/public/buy.png'
import { Button } from '../ui/button'

const ShopDetails = () => {
  return (
    <section className="text-gray-600 bg-[#0c0c0c]  mt-32 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image width={500} height={300} className="object-cover object-center rounded" alt="buy" src={Buy} />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white playfairdisplay">Find Your Perfect Look at The Molen – Where Fashion Dreams Come True</h1>
          <p className="mb-8 leading-relaxed text-[#c2c1c1]">Welcome to The Molen, where modern trends meet timeless sophistication. Our exclusive collection, from expertly tailored suits to stylish casual wear, is designed with precision and care. Discover refined fashion and elevate your style with The Molen.</p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
              <label htmlFor="hero-field" className="leading-7 text-sm text-gray-500">Join Our Newsletter for the Latest Updates</label>
            </div>
            <Button className='hover-bg-gray-200 text-black bg-white'>JOIN</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
 
export default ShopDetails