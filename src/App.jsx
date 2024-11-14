import React from 'react'
import { LocationProvider } from './components/LocationContext'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar';




const App = () => {
  return (
    <>
      <NavBar />
      <LocationProvider>
        <Outlet />
      </LocationProvider>
      <Footer />
    </>
  )
}

export default App;