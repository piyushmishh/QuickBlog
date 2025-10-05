import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
      
      {/* Outer Container for Links and Logo/Text (The Main Flex Row) */}
      <div className='flex flex-col md:flex-row items-start justify-between 
           gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
        
        {/* FIX 1: Wrapper for Logo and Description (Take up 45% width on medium screens) */}
        <div className='md:w-[45%]'> 
          <img src={assets.logo} alt="logo" className='w-32 sm:w-44'/>
          <p className='mt-6'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum recusandae, aliquid voluptatum hic et labore blanditiis impedit minima reiciendis nesciunt harum? Ullam, labore magni voluptatem neque perferendis temporibus fuga dolorum.
          </p>
        </div>
        
        {/* FIX 2: Link Groups Container (Take up 45% width on medium screens) */}
        {/* Removed w-full to let flexbox manage the width with md:w-[45%] */}
        <div className='flex justify-between md:w-[45%] gap-5'> 
          
          {footer_data.map((section, index)=>(
            <div key={index}>
              <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>
                {section.title}
              </h3>
              <ul className='text-sm space-y-1'>
                {section.links.map((link,i)=>(
                  <li key={i}>
                    <a href="#" className='hover:underline transition'>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
      
      {/* Copyright Strip */}
      <p className='py-4 text-center text-sm md:text:base text-gray-500/80'>
        Copyright 2025 © QuickBlog GreatStack - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer