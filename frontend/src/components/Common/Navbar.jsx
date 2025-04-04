import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2'
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false); 
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);

    const toggleNavDrawer = () => {
      setNavDrawerOpen(!navDrawerOpen);
    };
  
    const toggleCartDrawer = () => {
      setDrawerOpen(!drawerOpen);
    };
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

                <button onClick={toggleCartDrawer} className='relative hover:text-black'>
                    <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'/>
                    <span className='absolute bg-rabit-red rounded-full -top-1 text-white px-2 py-0.5 text-xs'>
                        4
                    </span>
                </button>

                <button>
                    {/* search  */}
                    <SearchBar />
                </button>

                <button onClick={toggleNavDrawer} className='md:hidden'>
                    <HiBars3BottomRight className='h-6 w-6 text-gray-700' />
                </button>

            </div>
        </nav>
        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>

        {/* Mobile Navigation */}
        <div className={`fixed top-0 left-0 w-1/2 h-full bg-white shadow-lg transform transition-transform duration-300 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className='flex justify-end p-4'>
                <button onClick={toggleNavDrawer}>
                    <IoMdClose className='h-6 w-6 text-gray-600' />
                </button>
            </div>
            <div className='p-4'>
                <h2 className='text-xl font-semibold mb-4'>Menu</h2>
                <nav className='space-y-4'>
                    <Link to='#' onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Men</Link>
                    <Link to='#' onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Women</Link>
                    <Link to='#' onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Top wear</Link>
                    <Link to='#' onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Bottom Wear</Link>
                </nav>
            </div>
        </div>
    </>
  )
}

export default Navbar