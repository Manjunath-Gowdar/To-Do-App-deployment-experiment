// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { login } from '../actions/userAction'

// const LoginScreen = ({ location, history }) => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const dispatch = useDispatch()

//   const userLogin = useSelector((state) => state.userLogin)
//   const { loading, error, userInfo } = userLogin

//   const redirect = location.search ? location.search.split('=')[1] : '/'

//   useEffect(() => {
//     if (userInfo) {
//       history.push(redirect)
//     }
//   }, [history, userInfo, redirect])

//   const submitHandler = (e) => {
//     e.preventDefault()
//     dispatch(login(email, password))
//   }

//   return (
//     <div>

//         <h1>hello login</h1>
//       {/* <h1>Sign In</h1>
//       {error && <h3>{error}</h3>}
//       {loading && <h2>LOADING</h2>}
//        <form>
//             <label for='email'>Enter your Email</label>
//             <input type='text' id='email' name='email'/>
            
//             <label for='password'>Enter your password</label>
//             <input type='text' id='password' name='password'/>
            
//             <input type='submit' value='submit' onSubmit={submitHandler}/>
//        </form> */}

//       {/* <Row className='py-3'>
//         <Col>
//           New Customer?{' '}
//           <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
//             Register
//           </Link>
//         </Col>
//       </Row> */}
//     </div>
//   )
// }

// export default LoginScreen

import React,{useState,useEffect} from 'react'
import { useLocation , useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userAction'

const LoginScreen = () => {
const navigate  = useNavigate()
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

//   console.log(location)
//   const redirect = location.search ? location.search.split('=')[1] : '/'
  
  useEffect(() => {
    if (userInfo) {
        navigate('/')
    }
  }, [navigate, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    navigate('/')
  }
  return (
    <div>
       <h1>Sign In</h1>
       {error && <h3>{error}</h3>}
       {loading && <h2>LOADING</h2>}
        <form onSubmit={submitHandler}>
             <label for='email'>Enter your Email</label><br/>
             <input type='text' id='email' name='email' onChange={e => setEmail(e.target.value)}/><br />
            
             <label for='password'>Enter your password</label><br/>
             <input type='text' id='password' name='password' onChange={e=>setPassword(e.target.value)}/><br/>
            
             <input type='submit' value='submit' />
        </form>
    </div>
  )
}

export default LoginScreen