import React from 'react'
// import Carousel from 'react-grid-carousel'
import { AiFillStar } from "react-icons/ai";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




const Packages = () => {






    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            partialVisibilityGutter: 40
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1,
            partialVisibilityGutter: 30
        }
    };





    return (
        <section className='px-6 md:px-24 xl:px-36 mt-40 sm:my-24'>
            {/* top heading container */}
            <div>
                <h4 className='text-blue-600 font-semibold tracking-widest'>TOURS PACKAGES</h4>
                <h1 className='text-3xl lg:text-5xl font-bold lg:mb-8'>The amazing places around the world</h1>
            </div>
            {/* 2nd slider conatiner */}
            <div>

                <Carousel responsive={responsive} infinite={true} minimumTouchDrag={30} >
                    {/* 1st Card */}
                    <div className='shadow-sm border-2 mx-1 mb-4 hover:cursor-pointer hover:shadow-lg rounded-2xl group  bg-white  overflow-hidden transition-all ease-in-out duration-300'>
                        <div className='h-[280px] overflow-hidden'>
                            <img className='w-full rounded-t-xl object-cover h-full  group-hover:scale-[1.05] transition-all ease-in-out duration-300' src="/tours/europe.jpg" alt='img hare' />
                        </div>
                        <div className='px-6 py-6'>
                            <h2 className='text-xl font-bold'>Full Europe - All Stunning Places</h2>
                            <div className='flex justify-between items-center my-4'>
                                <p className='text-gray-600'>12 days tours</p>
                                <div className='flex bg-[#ffe8d6] rounded-full gap-2 px-2 py-1 items-center'>
                                    <AiFillStar className='text-[#ff8220]' />
                                    <p className='font-semibold text-[#ff8220]'>4.9</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center mt-4'>
                                <h2 className='text-blue-600 text-2xl font-bold'>$350</h2>
                                <button className='border border-blue-600 text-blue-600 px-4 py-1 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300 hover:shadow-md'>Book Now</button>
                            </div>
                        </div>
                    </div>

                    {/* 2nd card */}
                    <div className='shadow-sm border-2 mx-1 mb-4 hover:cursor-pointer hover:shadow-lg rounded-2xl group  bg-white  overflow-hidden transition-all ease-in-out duration-300'>
                        <div className='h-[280px] overflow-hidden'>
                            <img className='w-full rounded-t-xl object-cover h-full  group-hover:scale-[1.05] transition-all ease-in-out duration-300' src="/tours/london.jpg" alt='img hare' />
                        </div>
                        <div className='px-6 py-6'>
                            <h2 className='text-xl font-bold'>Full London - All Stunning Places</h2>
                            <div className='flex justify-between items-center my-4'>
                                <p className='text-gray-600'>10 days tours</p>
                                <div className='flex bg-[#ffe8d6] rounded-full gap-2 px-2 py-1 items-center'>
                                    <AiFillStar className='text-[#ff8220]' />
                                    <p className='font-semibold text-[#ff8220]'>4.8</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center mt-4'>
                                <h2 className='text-blue-600 text-2xl font-bold'>$299</h2>
                                <button className='border border-blue-600 text-blue-600 px-4 py-1 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300 hover:shadow-md'>Book Now</button>
                            </div>
                        </div>
                    </div>

                    {/* 3rd card */}
                    <div className='shadow-sm border-2 mx-1 mb-4 hover:cursor-pointer hover:shadow-lg rounded-2xl group  bg-white  overflow-hidden transition-all ease-in-out duration-300'>
                        <div className='h-[280px] overflow-hidden'>
                            <img className='w-full rounded-t-xl object-cover h-full  group-hover:scale-[1.05] transition-all ease-in-out duration-300' src="/tours/italy.jpg" alt='img hare' />
                        </div>
                        <div className='px-6 py-6'>
                            <h2 className='text-xl font-bold'>Full Italy - All Stunning Places</h2>
                            <div className='flex justify-between items-center my-4'>
                                <p className='text-gray-600'>15 days tours</p>
                                <div className='flex bg-[#ffe8d6] rounded-full gap-2 px-2 py-1 items-center'>
                                    <AiFillStar className='text-[#ff8220]' />
                                    <p className='font-semibold text-[#ff8220]'>4.9</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center mt-4'>
                                <h2 className='text-blue-600 text-2xl font-bold'>$399</h2>
                                <button className='border border-blue-600 text-blue-600 px-4 py-1 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300 hover:shadow-md'>Book Now</button>
                            </div>
                        </div>
                    </div>

                    {/* 4th card */}
                    <div className='shadow-sm border-2 mx-1 mb-4 hover:cursor-pointer hover:shadow-lg rounded-2xl group  bg-white  overflow-hidden transition-all ease-in-out duration-300'>
                        <div className='h-[280px] overflow-hidden'>
                            <img className='w-full rounded-t-xl object-cover h-full  group-hover:scale-[1.05] transition-all ease-in-out duration-300' src="/tours/australia.jpg" alt='img hare' />
                        </div>
                        <div className='px-6 py-6'>
                            <h2 className='text-xl font-bold'>Full Australia - All Stunning Places</h2>
                            <div className='flex justify-between items-center my-4'>
                                <p className='text-gray-600'>12 days tours</p>
                                <div className='flex bg-[#ffe8d6] rounded-full gap-2 px-2 py-1 items-center'>
                                    <AiFillStar className='text-[#ff8220]' />
                                    <p className='font-semibold text-[#ff8220]'>4.9</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center mt-4'>
                                <h2 className='text-blue-600 text-2xl font-bold'>$430</h2>
                                <button className='border border-blue-600 text-blue-600 px-4 py-1 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300 hover:shadow-md'>Book Now</button>
                            </div>
                        </div>
                    </div>

                    {/* 5th card */}
                    <div className='shadow-sm border-2 mx-1 mb-4 hover:cursor-pointer hover:shadow-lg rounded-2xl group  bg-white  overflow-hidden transition-all ease-in-out duration-300'>
                        <div className='h-[280px] overflow-hidden'>
                            <img className='w-full rounded-t-xl object-cover h-full  group-hover:scale-[1.05] transition-all ease-in-out duration-300' src="/tours/singapore.jpg" alt='img hare' />
                        </div>
                        <div className='px-6 py-6'>
                            <h2 className='text-xl font-bold'>Full Singapore - All Stunning Places</h2>
                            <div className='flex justify-between items-center my-4'>
                                <p className='text-gray-600'>14 days tours</p>
                                <div className='flex bg-[#ffe8d6] rounded-full gap-2 px-2 py-1 items-center'>
                                    <AiFillStar className='text-[#ff8220]' />
                                    <p className='font-semibold text-[#ff8220]'>4.9</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center mt-4'>
                                <h2 className='text-blue-600 text-2xl font-bold'>$550</h2>
                                <button className='border border-blue-600 text-blue-600 px-4 py-1 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-300 hover:shadow-md'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </Carousel>

            </div>
        </section>
    )
}

export default Packages