import React from 'react'
import SearchBar from '../organisms/searchBar'
import Logo from '@/../../public/logo.jpeg'
import Image from 'next/image'

const Header = () => {
  return (
    <>          
     <nav className="bg-gray-500">
        <div className="flex items-center font-medium justify-between h-20 mx-3 lg:mx-16">
          <div className='flex lg:justify-start justify-between items-center lg:w-7/12 w-full'>
            <div className="md:w-auto md:mr-3 w-full flex flex-start">
              <Image
                src={Logo}
                height={40}
                width={85}
                alt="Logo"
                className="md:cursor-pointer"
              />
            </div>
            <div className="md:block md:mr-3 hidden md:w-8/12 lg:w-full">
              <form>
                <SearchBar/>
              </form>
            </div>
          </div>
          
            <div className="py-5 flex gap-5">
              <button type='button' className="bg-green-600 px-5 py-3 rounded-lg text-white text-sm whitespace-nowrap">
                Sign In
              </button>
              <button type='button' className="bg-blue-600 px-5 py-3 rounded-lg text-white text-sm whitespace-nowrap">
                Sign Up
              </button>
            </div>
         
        </div >
      </nav >
    </>
  )
}

export default Header