import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userAction'

const LoginScreen = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const submitHandler = () => {
    dispatch(login(email, password))
    navigate('/')
  }

  const handleButtonClick = () => {
    navigate('/register')
  }

  return (
    <div>
      <h1>Sign In</h1>
      {error && <h3>{error}</h3>}
      {loading && <h2>LOADING..</h2>}
      <form onSubmit={submitHandler}>
        <label htmlFor='email'>Enter your Email</label>
        <br />
        <input
          type='text'
          id='email'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label htmlFor='password'>Enter your password</label>
        <br />
        <input
          type='text'
          id='password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <input type='submit' value='submit' />
      </form>

      <h4>Don't Have An Account?</h4>
      <button onClick={handleButtonClick}>REGISTER</button>
    </div>
  )
}

export default LoginScreen
