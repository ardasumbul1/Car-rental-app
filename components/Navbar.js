import Link from 'next/link';
import Navlink from "./Navlink"
import { useState } from 'react';

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return(
    <div className="w-full h-[80px] items-center mt-[3vh] flex">
      <div className="ml-[9vh] flex items-center hidden sm:flex" >
        <img className="w-[80px]" src="/logo.png" alt="alt" />
        <h1 className='text-xl font-semibold text-[#655DBB] ml-[1vh]'>Carlaa</h1>
      </div>
      
      <div className="justify-center flex items-center text-2xl ml-[25vh] hidden md:flex">
        <Navlink name="Home"/>
        <Navlink name="Models"/>
        <Navlink name="About"/>
        <Navlink name="Contact"/>
        <Navlink name="Testimonials" />
      </div>
      
      <div className="justify-center flex items-center ml-[25vh]  hidden md:flex">
        <button className="m-[6vh] font-bold" type="button">Sign In</button>
        <button className="bg-[#655DBB] text-slate-50 font-bold pr-[3vh] pl-[3vh] pt-[2vh] pb-[2vh] rounded" type="button">Register</button>
      </div>
      
      <div className="absolute md:hidden right-0 mr-[3vh]">
        <button onClick={handleToggle}>
          <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="fixed items-center justify-center inset-0 bg-gray-900 bg-opacity-50 z-50">
          <div className="flex items-center bg-white shadow-lg transform -translate-x-full ease-in-out transition-all duration-300">
            <div className="px-4 py-2 mt-20">
            
              <Navlink name="Home" onClick={handleToggle}/>
              <Navlink name="Models" onClick={handleToggle}/>
              <Navlink name="About" onClick={handleToggle}/>
              <Navlink name="Contact" onClick={handleToggle}/>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
