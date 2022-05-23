import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userAction'
import { useNavigate } from 'react-router-dom'
import { Popover } from '@headlessui/react'

const Header = () => {
  const navigate = useNavigate()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <header>
      <nav>
        {userInfo ? (
          <>
            <Popover className='relative bg-white '>
              <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='flex justify-between items-center border-b-2 border-gray-100 py-5 md:justify-start md:space-x-10'>
                  <div className=' md:flex md:flex-1 lg:w-0'>
                    <Link
                      to='/'
                      className='whitespace-nowrap font-medium text-gray-500 flex hover:text-gray-900 text-2xl'>
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

                  <div className='pl-28  md:flex md:flex-1 lg:w-0'>
                    <h2 className='font-medium text-2xl text-gray-500'>
                      Welcome {userInfo.name}
                    </h2>
                  </div>

                  <div className=' md:flex items-center justify-end md:flex-1 lg:w-0'>
                    <button
                      onClick={logoutHandler}
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
          </>
        ) : (
          <>
            <Popover className='relative bg-white '>
              <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
                  <div className='hidden md:flex md:flex-1 lg:w-0'>
                    <Link
                      to='/'
                      className='whitespace-nowrap font-medium text-gray-500 flex hover:text-gray-900 text-2xl'>
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
                    <Link
                      to='/login'
                      className='whitespace-nowrap flex text-base font-medium text-gray-500 hover:text-gray-900'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 mr-1'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                        />
                      </svg>
                      Login
                    </Link>
                    <Link
                      to='/register'
                      className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-5 mr-1'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'
                        />
                      </svg>
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </Popover>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
