import React from 'react'
import { Popover } from '@headlessui/react'
import { Link } from 'react-router-dom'

const Test = () => {
  return (
    <Popover className='relative bg-white '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='hidden md:flex md:flex-1 lg:w-0'>
            <Link
              to='/'
              className='whitespace-nowrap text-base font-medium text-gray-500 flex hover:text-gray-900 text-2xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-7 mx-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
              HOME
            </Link>
          </div>
          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <button
              className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 mr-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>
    </Popover>
  )
}

export default Test
