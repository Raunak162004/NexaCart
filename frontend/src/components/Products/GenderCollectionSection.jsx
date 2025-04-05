import React from 'react'
import mensCollectionImage from "../../assets/mens-collection.webp"
import womensCollectionImage from "../../assets/womens-collection.webp"
import { Link } from 'react-router-dom'

const GenderCollectionSection = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>
        <div className='container mx-auto flex flex-col md:flex-row gap-8'>
            {/* womensCollection */}
            <div className='relative flex-1'>
                <img className='w-full h-[700px] object-cover' src={womensCollectionImage} alt="Womens Collection" />
                <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
                    <h2>Women's Collection</h2>
                    <Link to='/collections/all?gender=women' className='underline text-gray-700 hover:text-black'>Shop Now</Link>
                </div>
            </div>

            {/* Mens Collection */}
            <div className='relative flex-1'>
                <img className='w-full h-[700px] object-cover' src={mensCollectionImage} alt="Womens Collection" />
                <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
                    <h2>Men's Collection</h2>
                    <Link to='/collections/all?gender=men' className='underline text-gray-700 hover:text-black'>Shop Now</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GenderCollectionSection