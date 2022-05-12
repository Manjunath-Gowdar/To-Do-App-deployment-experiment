import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
           <Link to='/home' style={{'padding-right':'20px'}}>HOME</Link>
           <Link to='/login' style={{'padding-right':'20px'}}>LOGIN</Link>
           <Link to='/register' style={{'padding-right':'20px'}}>REGISTER</Link>
      </nav>
    </header>
  )
}

export default Header
