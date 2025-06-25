import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Home from './Home'
import AboutUs from './AboutUs'
import Footer from './Footer'
import { Routes , Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="" element= "" />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="" element="" />
            <Route path="" element="" />
            <Route path="" element="" />         
          </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App