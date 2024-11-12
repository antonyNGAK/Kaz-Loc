import React from 'react'
import { Outlet } from 'react-router-dom'




const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;