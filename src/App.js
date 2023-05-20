import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeComponent from './Components/HomeComponents'
import AboutComponent from './Components/AboutComponent'

const App = () => {
  /** Root Routes */
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeComponent />
    },
    {
      path: '/about',
      element: <AboutComponent />
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App