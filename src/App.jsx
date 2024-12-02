import React from 'react'
import { LocationProvider } from './components/LocationContext'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';




const App = () => {
  return (
    <>
      <LocationProvider>
        <Outlet />
        <ToastContainer />
      </LocationProvider>
      <Footer />
    </>
  )
}

export default App;