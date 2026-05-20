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
        <div className='flex gap-20 rounded-lg'>
          <Link href="/female" className='text-white font-bold flex flex-col items-center'>
            <div className='relative w-[100px] h-[140px]'>
              <Image src={Women} alt="women" fill className='object-contain invert' />
            </div>
            <h4 className='mt-4'>Women</h4>
          </Link>
          <Link href="/male" className='text-white font-bold flex flex-col items-center'>
            <div className='relative w-[100px] h-[140px]'>
              <Image src={Men} alt="men" fill className='object-contain invert' />
            </div>
            <h4 className='mt-4'>Men</h4>
          </Link>
        </div>
      </div>

    </div>

  )
}

export default OurProduct
