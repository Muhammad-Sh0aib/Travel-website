import React from 'react'
// import Carousel from 'react-grid-carousel'
import { AiFillStar } from "react-icons/ai";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

import KeenSlider from 'https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm'

<link href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css" rel="stylesheet" />


const Packages = () => {







    const keenSlider = new KeenSlider(
        '#keen-slider',
        {
            loop: true,
            slides: {
                origin: 'center',
                perView: 1.25,
                spacing: 16,
            },
            breakpoints: {
                '(min-width: 1024px)': {
                    slides: {
                        origin: 'auto',
                        perView: 2.5,
                        spacing: 32,
                    },
                },
            },
        },
        []
    )


    // const keenSliderPrevious = () => {
    //     keenSlider.prev()
    // }

    // const keenSliderNext = () => {
    //     keenSlider.next()
    // }




    // const responsive = {
    //     superLargeDesktop: {
    //         // the naming can be any, depends on you.
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 5,
    //         partialVisibilityGutter: 40
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 3,
    //         partialVisibilityGutter: 30
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2,
    //         partialVisibilityGutter: 30
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1,
    //         partialVisibilityGutter: 30
    //     }
    // };





    return (
        <section className=''>
            {/* top heading container */}
            {/* <div>
                <h4 className='text-blue-600 font-semibold tracking-widest'>TOURS PACKAGES</h4>
                <h1 className='text-3xl lg:text-5xl font-bold lg:mb-4 xl:mb-2'>The amazing places around the world</h1>
            </div> */}
            {/* 2nd slider conatiner */}
            <div>







                <section className="bg-gray-100 px-6 md:px-24 xl:px-36 mt-40 sm:my-24">
                    <div className="mx-auto max-w-[1340px]   ">
                        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">

                            {/* <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Read trusted reviews from our customers
      </h2> */}
                            <div>
                                <h4 className='text-blue-600 font-semibold tracking-widest'>TOURS PACKAGES</h4>
                                <h1 className='text-3xl lg:text-5xl font-bold lg:mb-4 xl:mb-2'>The amazing places around the world</h1>
                            </div>

                            <div className="mt-8 flex gap-4 lg:mt-0">
                                <button
                                    aria-label="Previous slide"
                                    id="keen-slider-previous"
                                    onClick={() => keenSlider.prev()}
                                    className="rounded-full border border-blue-600 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 rtl:rotate-180"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                </button>

                                <button
                                    aria-label="Next slide"
                                    id="keen-slider-next"
                                    onClick={()=>keenSlider.next()}
                                    className="rounded-full border border-blue-600 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                                >
                                    <svg
                                        className="size-5 rtl:rotate-180"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 5l7 7-7 7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
                            <div id="keen-slider" className="keen-slider">
                                <div className="keen-slider__slide">
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
                                </div>

                                <div className="keen-slider__slide">
                                <div className='shadow-md border-2 mx-1 mb-4 hover:cursor-pointer hover:shadow-lg rounded-2xl hover:scale-[1.01]  bg-white  overflow-hidden transition-all ease-in-out duration-300'>
                            <img className='w-full rounded-t-xl max-h-[265px] object-cover' src="travel2.jpg" alt='img hare' />
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
                                </div>

                                <div className="keen-slider__slide">
                                <div className='shadow-md border-2 mx-1 mb-4 hover:cursor-pointer hover:shadow-lg rounded-2xl hover:scale-[1.01]  bg-white  overflow-hidden transition-all ease-in-out duration-300'>
                            <img className='w-full rounded-t-xl max-h-[265px] object-cover' src="travel3.jpg" alt='img hare' />
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>








                {/* <Carousel responsive={responsive} infinite={true} minimumTouchDrag={30} >
                    
                    <div className='shadow-md border-2 mx-1 mb-4 hover:cursor-pointer hover:shadow-lg rounded-2xl hover:scale-[1.01]  bg-white  overflow-hidden transition-all ease-in-out duration-300'>
                        <img className='w-full rounded-t-xl object-cover' src="travel1.jpg" alt='img hare' />
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


                    
                    <div className='shadow-md border-2 mx-1 mb-4 hover:cursor-pointer hover:shadow-lg rounded-2xl hover:scale-[1.01]  bg-white  overflow-hidden transition-all ease-in-out duration-300'>
                        <img className='w-full rounded-t-xl  object-cover' src="travel2.jpg" alt='img hare' />
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


                    
                    <div className='shadow-md border-2 mx-1 mb-4 hover:cursor-pointer hover:shadow-lg rounded-2xl hover:scale-[1.01]  bg-white  overflow-hidden transition-all ease-in-out duration-300'>
                        <img className='w-full rounded-t-xl  object-cover' src="travel3.jpg" alt='img hare' />
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


                   
                    <div className='shadow-md border-2 mx-1 mb-4 hover:cursor-pointer hover:shadow-lg rounded-2xl hover:scale-[1.01]  bg-white  overflow-hidden transition-all ease-in-out duration-300'>
                        <img className='w-full rounded-t-xl  object-cover' src="travel2.jpg" alt='img hare' />
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

                </Carousel> */}







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