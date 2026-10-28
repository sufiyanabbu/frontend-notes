import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className='h-full w-full flex flex-col items-center gap-10 p-10'>
      <div className='flex gap-10'>
        <Link className='underline' to='/product/men'>Men</Link>
        <Link className='underline' to='/product/women'>Women</Link>
                <Link className='underline' to='/product/kids'>Kids</Link>
      </div>
      <div>
        <Outlet/>
      </div>
      <div className='text-4xl font-bold'>
      Product
    </div>
    </div>
  )
}

export default Product
