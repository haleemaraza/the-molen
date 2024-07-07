import Link from 'next/link'
import Women from '/public/images/women.png'
import Men from '/public/images/men.png'
import Image from 'next/image'

const OurProduct = () => {
  return (
    <div className='text-center p-12 bg-[#414040] rounded-lg'>
      <h3 className='text-xl playfairdisplay font-300 text-white'>Our Products</h3>
      <p className='mb-5 text-gray-400'>Designing impeccable fits for both, we blend precision tailoring with timeless style</p>
      <div className='flex flex-wrap justify-center gap-8'>
        <div className='flex gap-20 rounded-lg space-x-14'>
          <Link
            href="/female"
            className='text-white font-bold'
          > <Image src={Women} alt="women" width={100} height={100} className='invert'/>
            <h4 className='mt-4'>Women</h4>
            <p></p>
          </Link>
          <Link
            href="/male"
            className='text-white font-bold '
          ><Image src={Men} alt="men" width={100} height={100} className='object-top object-cover max-h-[150px] invert ' />
            <h4 className='mt-4'>Men</h4>
            <p></p>
          </Link>
        </div>
      </div>

    </div>

  )
}

export default OurProduct