import React from 'react'
// import Carousel from 'react-grid-carousel'
import { AiFillStar } from "react-icons/ai";




const Packages = () => {



    return (
        <section className='px-6 md:px-24 xl:px-36 mt-40 sm:my-24 '>
            {/* top heading container */}
            <div>
                <h4 className='text-blue-600 font-semibold tracking-widest'>TOURS PACKAGES</h4>
                <h1 className='text-3xl lg:text-5xl font-bold lg:mb-4 xl:mb-2'>The amazing places around the world</h1>
            </div>
            {/* 2nd slider conatiner */}
            <div>










                {/* <Carousel cols={3} rows={1} gap={14} loop={true}  responsiveLayout={[{breakpoint: 400,cols: 1,rows: 1,gap: 10,loop: true}]} >
                    
                    <Carousel.Item>
                        <div className='shadow-md border-2 mx-1 mb-4 hover:cursor-pointer hover:shadow-lg rounded-2xl hover:scale-[1.01]  bg-white  overflow-hidden transition-all ease-in-out duration-300'>
                            <img className='w-full rounded-t-xl max-h-[265px] object-cover' src="travel1.jpg" alt='img hare' />
                            <div className='px-6 py-6'>
                                <h2 className='text-xl font-bold'>Full New York - All Stunning Places</h2>
                                <div className='flex justify-between items-center my-4'>
                                    <p className='text-gray-600'>10 days tours</p>
                                    <div className='flex bg-[#ffe8d6] rounded-full gap-2 px-2 py-1 items-center'>
                                        <AiFillStar className='text-[#ff8220]' />
                                        <p className='font-semibold text-[#ff8220]'>4.9</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex justify-between items-center mt-4'>
                                    <h2 className='text-blue-600 text-2xl font-bold'>$299</h2>
                                    <button className='border border-blue-600 text-blue-600 px-4 py-1 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300 hover:shadow-md'>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>


                    <Carousel.Item>
                        <div className='shadow-md border-2 mx-1 mb-4 hover:cursor-pointer hover:shadow-lg rounded-2xl hover:scale-[1.01]  bg-white  overflow-hidden transition-all ease-in-out duration-300'>
                            <img className='w-full rounded-t-xl max-h-[265px] object-cover' src="travel2.jpg" alt='img hare' />
                            <div className='px-6 py-6'>
                                <h2 className='text-xl font-bold'>Full Europe - All Stunning Places</h2>
                                <div className='flex justify-between items-center my-4'>
                                    <p className='text-gray-600'>10 days tours</p>
                                    <div className='flex bg-[#ffe8d6] rounded-full gap-2 px-2 py-1 items-center'>
                                        <AiFillStar className='text-[#ff8220]' />
                                        <p className='font-semibold text-[#ff8220]'>4.9</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex justify-between items-center mt-4'>
                                    <h2 className='text-blue-600 text-2xl font-bold'>$299</h2>
                                    <button className='border border-blue-600 text-blue-600 px-4 py-1 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300 hover:shadow-md'>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                  
                    <Carousel.Item>
                        <div className='shadow-md border-2 mx-1 mb-4 hover:cursor-pointer hover:shadow-lg rounded-2xl hover:scale-[1.01] bg-white  overflow-hidden transition-all ease-in-out duration-300'>
                            <img className='w-full rounded-t-xl max-h-[265px] object-cover' src="travel3.jpg" alt='img hare' />
                            <div className='px-6 py-6'>
                                <h2 className='text-xl font-bold'>Full Europe - All Stunning Places</h2>
                                <div className='flex justify-between items-center my-4'>
                                    <p className='text-gray-600'>10 days tours</p>
                                    <div className='flex bg-[#ffe8d6] rounded-full gap-2 px-2 py-1 items-center'>
                                        <AiFillStar className='text-[#ff8220]' />
                                        <p className='font-semibold text-[#ff8220]'>4.9</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex justify-between items-center mt-4'>
                                    <h2 className='text-blue-600 text-2xl font-bold'>$299</h2>
                                    <button className='border border-blue-600 text-blue-600 px-4 py-1 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300 hover:shadow-md'>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                   
                    <Carousel.Item>
                        <div className='shadow-md border-2 mx-1 mb-4 hover:cursor-pointer hover:shadow-lg rounded-2xl hover:scale-[1.01] bg-white  overflow-hidden transition-all ease-in-out duration-300'>
                            <img className='w-full rounded-t-xl max-h-[265px] object-cover' src="travel4.jpg" alt='img hare' />
                            <div className='px-6 py-6'>
                                <h2 className='text-xl font-bold'>Full Europe - All Stunning Places</h2>
                                <div className='flex justify-between items-center my-4'>
                                    <p className='text-gray-600'>10 days tours</p>
                                    <div className='flex bg-[#ffe8d6] rounded-full gap-2 px-2 py-1 items-center'>
                                        <AiFillStar className='text-[#ff8220]' />
                                        <p className='font-semibold text-[#ff8220]'>4.9</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex justify-between items-center mt-4'>
                                    <h2 className='text-blue-600 text-2xl font-bold'>$299</h2>
                                    <button className='border border-blue-600 text-blue-600 px-4 py-1 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300 hover:shadow-md'>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                    
                    <Carousel.Item>
                        <div className='shadow-md border-2 mx-1 mb-4 hover:cursor-pointer hover:shadow-lg rounded-2xl hover:scale-[1.01] bg-white  overflow-hidden transition-all ease-in-out duration-300'>
                            <img className='w-full rounded-t-xl max-h-[265px] object-cover' src="travel1.jpg" alt='img hare' />
                            <div className='px-6 py-6'>
                                <h2 className='text-xl font-bold'>Full Europe - All Stunning Places</h2>
                                <div className='flex justify-between items-center my-4'>
                                    <p className='text-gray-600'>10 days tours</p>
                                    <div className='flex bg-[#ffe8d6] rounded-full gap-2 px-2 py-1 items-center'>
                                        <AiFillStar className='text-[#ff8220]' />
                                        <p className='font-semibold text-[#ff8220]'>4.9</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex justify-between items-center mt-4'>
                                    <h2 className='text-blue-600 text-2xl font-bold'>$299</h2>
                                    <button className='border border-blue-600 text-blue-600 px-4 py-1 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300 hover:shadow-md'>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                </Carousel> */}





            </div>
        </section>
    )
}

export default Packages