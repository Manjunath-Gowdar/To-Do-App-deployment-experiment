import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import Edit from './components/Edit'
import Test from './components/Test'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/test' element={<Test/>} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/edit/:todoId/:todo' element={<Edit />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
