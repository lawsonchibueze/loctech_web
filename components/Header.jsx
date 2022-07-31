import React, { useState, useEffect, Context } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Header = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-purple-300 py-8'>
        <div className='md:float-left block'>
          <Link href='/articles'>
            <span className='cursor-pointer font-normal text-4xl text-purple-300'>
              Loctech
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className='md:float-right mt-2 align-middle text-purple-300 ml-4 font-normal cursor-pointer'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
