import React from 'react'

const Hero = () => {
  return (
    <>
      <section className=' px-6 py-24 space-y-8 sm:space-y-0 md:px-24 xl:px-36'>
        <div className='space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center sm:gap-4 xl:gap-8'>
          {/* left text container */}
          <div className=''>
            <h4 className='text-blue-600 font-semibold tracking-widest'>LET'S GO AROUND THE WORLD </h4>
            <h1 className='text-3xl lg:text-5xl font-extrabold lg:mb-4 xl:mb-2'>Dare to live the life you've always wanted</h1>
            <p className='text-gray-600 mt-4'>Life is shorted and the world is wide. So, better get started</p>
          </div>
          {/* right pic container */}
          <div className='relative flex justify-between items-center'>
            <img className='w-[90%] object-cover h-[450px] sm:h-[400px] xl:h-[500px] rounded-t-full' src='travel2.jpg' alt='round  Here' />
            <img className='absolute w-32 xl:w-40 object-cover border-4 xl:border-8 top-56 sm:top-48 xl:top-60 right-0 border-white rounded-full h-48 xl:h-56' src='travel3.jpg' alt='second Here' />
          </div>
        </div>
        {/* Button */}
        <div className='sm:absolute sm:top-[480px] xl:top-[500px]'>
          <button className='bg-blue-600 text-white rounded-md px-4 py-2 shadow-sm hover:bg-blue-800 hover:shadow-lg'>Plan a Trip</button>
        </div>
      </section>
    </>
  )
}

export default Hero