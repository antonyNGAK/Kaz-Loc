import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import HomeConnect from './pages/HomeConnect'
import About from './pages/About'
import ActiveLocation from './pages/Location'
import FAQ from './pages/FAQ'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
        element: <Home />,
      },
      { path: "homeConnect", 
        element: <HomeConnect />,
      },

      { path: "login", 
        element: <Login />,
      },

      { path: "register",
        element: <Register />, 
      },
      
      { path: "profile", element: <Profile /> },

      {
        path: '/about',
        element: <About />,
      },

      { path: "faq", 
        element: <FAQ />, 

      },

      {
        path: 'location/:id',
        element: <ActiveLocation />,
      },
      { path: "contact", 
        element: <Contact />,
      },
    ],
  },
])

export default router