import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

  const navList = [{ link: "Home", url: "#" }, { link: "About", url: "#" }, { link: "Contact", url: "#" }, { link: "Services", url: "#" }]

  const [navOpen, setNavOpen] = useState(false)

  const toggleSidebar = ()=>{
    setNavOpen(!navOpen);
    document.body.style.overflow = navOpen ? '' : 'hidden';
  }


  return (
    <>
      <nav className='relative'>

        <div className='flex justify-between w-full items-center h-14 bg-white px-6  md:px-24 xl:px-36 shadow-md'>
          <div>
            <h2><span>Go</span> tour</h2>
          </div>

          <div className="hidden md:block">
            <ul className='flex gap-8'>
              {navList.map((item, key) => {
                return (
                  <li className=''>{item.link}</li>
                )
              })}
            </ul>
          </div>

          <div className='md:hidden'>
            {
              navOpen ? <IoClose className='text-2xl' onClick={toggleSidebar} /> : <FaBars onClick={toggleSidebar} />

            }

          </div>
        </div>

        <div className={`md:hidden w-full    absolute h-[91vh] backdrop-blur bg-gray-900 bg-opacity-40 z-50 transform -translate-x-full transition-all duration-300 ease-in-out ${navOpen ? "transform translate-x-0" : "transform -translate-x-full"}`}>
          <ul className='w-3/4 h-full   bg-white shadow-md flex flex-col items-center gap-8 pt-4 '>
            {navList.map((item, key) => {
              return (
                <li className=''>{item.link}</li>
              )
            })}
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Navbar