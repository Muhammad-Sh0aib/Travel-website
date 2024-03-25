import React from 'react'

const About = () => {
    return (
        <section className='px-6 md:px-24 xl:px-36 sm:py-12'>
            <div className='flex flex-col sm:flex-row sm:gap-2 lg:gap-8 items-center'>
                {/* left pic container */}
                <div className='order-2 sm:order-1 sm:w-2/4 xl:w-2/5 relative'>
                    <img className='rounded-full object-cover w-64 sm:w-4/5 h-96 md:h-[420px] lg:h-[520px] xl:h-[600px]' src='travel1.jpg' alt='img here'/>
                    <img className='rounded-full border-4 xl:border-8 border-white object-cover sm:w-3/5 h-72 lg:h-80 xl:h-96 absolute -bottom-28 sm:-bottom-20 -right-8 sm:right-0' src='travel4.jpg' alt='img here'/>
                </div>
                {/* right text container */}
                <div className='order-1 sm:order-2 sm:w-2/4 xl:w-3/5'>
                    <h4 className='text-blue-600 font-semibold tracking-widest'>ABOUT US</h4>
                    <h1 className='text-3xl lg:text-5xl font-bold lg:mb-4 xl:mb-2'>Our tour plan is to fulfil your dream wish</h1>
                    <p className='text-gray-600 mt-4'>Uderstand to achieve anything requires faith and belief in yourself, vision, hard work, determination and dedication</p>
                    <div className='flex justify-between py-6'>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-blue-600 text-2xl lg:text-4xl font-bold'>15</h2>
                            <p className='text-gray-600 text-center'>Years of <br />Experience</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-blue-600 text-2xl lg:text-4xl font-bold'>1K</h2>
                            <p className='text-gray-600 text-center'>Sucessful <br />Trips</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-blue-600 text-2xl lg:text-4xl font-bold'>20K</h2>
                            <p className='text-gray-600 text-center'>Happy <br />Customers</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-blue-600 text-2xl lg:text-4xl font-bold'>4.9</h2>
                            <p className='text-gray-600 text-center'>Overall <br />Rating</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About