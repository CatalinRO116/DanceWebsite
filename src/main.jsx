import { StrictMode } from 'react'
import React from 'react' // ← adaugă asta!
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Ballet from './pages/Ballet.jsx'
import Contemporary from './pages/Contemporany.jsx'
import HipHop from './pages/HipHop.jsx'
import Jazz from './pages/Jazz.jsx'
import Salsa from './pages/Salsa.jsx'
import Subscription from './pages/Subscription.jsx'
import About from './pages/About.jsx'
import History from './pages/History.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/ballet',
    element: <Ballet />,
  },
  {
    path: '/contemporany',  // also fixed typo here
    element: <Contemporary />,
  },
  {
    path: '/hipHop',
    element: <HipHop />,
  },
  {
     path: '/jazz',
    element: <Jazz />,
  }
  ,
  {
     path: '/salsa',
    element: <Salsa />,
  }
  ,
  {
    path:'/subscription',
    element:<Subscription />
  }
  ,
  {
  path:'/about',
  element:<About />
  }
  ,
  {
    path:'/history',
    element:<History />
  }

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
