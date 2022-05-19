import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/home' element={<HomeScreen />} />
            <Route path='/login' element={<LoginScreen />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
