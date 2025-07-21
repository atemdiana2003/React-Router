import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import { Routes, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import RootLayout from './layout/RootLayout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>

      </Route>
    )
  )

  return (
  <div>
  <Navbar />
   <div className='container'>
     <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/Products' element={<Products />}/>
        <Route  path='/About' element={<About />}/>
        <Route  path='/Contact' element={<Contact />}/>
     </Routes>
   </div>
   </div>
  )
}

export default App