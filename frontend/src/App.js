import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/home' element={<HomeScreen />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
