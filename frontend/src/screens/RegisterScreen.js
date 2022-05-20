import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userAction'

const RegisterScreen = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error } = userRegister

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Password do not match')
    } else {
      dispatch(register(name, email, password))
      navigate('/')
    }
  }

  const handleButtonClick = (e) => {
    e.preventDefault()
    navigate('/login')
  }
  return (
    <div>
      <h1>Register</h1>
      {error && <h3>{error}</h3>}
      {message && <h2>{message}</h2>}
      {loading && <h2>LOADING..</h2>}
      <form onSubmit={submitHandler}>
        <label for='name'>Enter your name</label>
        <br />
        <input
          type='text'
          id='name'
          name='name'
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label for='email'>Enter your Email</label>
        <br />
        <input
          type='text'
          id='email'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label for='password'>Enter your password</label>
        <br />
        <input
          type='text'
          id='password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <label for='confirmPassword'>Confirm password</label>
        <br />
        <input
          type='text'
          id='confirmPassword'
          name='confirmPassword'
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />

        <input type='submit' value='Register' />
      </form>
      <h4>Have an account ?</h4>
      <button onClick={handleButtonClick}>LOGIN</button>
    </div>
  )
}

export default RegisterScreen
