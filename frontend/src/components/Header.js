import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userAction'

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <header>
      <nav>
        <Link to='/home' style={{ paddingRight: '20px' }}>
          HOME
        </Link>
        {userInfo ? (
          <>
            {/* <Link to='/profile'>Profile</Link> */}

            <button style={{ marginLeft: '20px' }} onClick={logoutHandler}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to='/login' style={{ paddingRight: '20px' }}>
              LOGIN
            </Link>

            <Link to='/register' style={{ paddingRight: '20px' }}>
              REGISTER
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
