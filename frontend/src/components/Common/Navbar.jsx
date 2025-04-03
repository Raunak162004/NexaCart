import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <>
        <nav className='container mx-auto flex items-center justify-between px-4 py-3'>
            <Link to='/' className='text-xl tracking-tighter'>NexaCart</Link>

            <div className='hidden md:flex space-x-6'>
                <Link to="#" className='text-gray-700 hover:text-black font-medium text-sm uppercase'>Men</Link>
                <Link to="#" className='text-gray-700 hover:text-black font-medium text-sm uppercase'>women</Link>
                <Link to="#" className='text-gray-700 hover:text-black font-medium text-sm uppercase'>Top wear</Link>
                <Link to="#" className='text-gray-700 hover:text-black font-medium text-sm uppercase'>Bottom Wear</Link>
            </div>

            <div className='flex items-center space-x-4'>
                <Link to="/profile" className='hover:text-black'> 
                    <HiOutlineUser className='h-6 w-6 text-gray-700'/> 
                </Link>

                <button className='relative hover:text-black'>
                    <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'/>
                    <span className='absolute bg-rabit-red rounded-full -top-1 text-white px-2 py-0.5 text-xs'>
                        4
                    </span>
                </button>

                <button>
                    {/* search  */}
                    <SearchBar />
                </button>

                <button className='md:hidden'>
                    <HiBars3BottomRight className='h-6 w-6 text-gray-700' />
                </button>

            </div>
        </nav>
    </>
  )
}

export default Navbar