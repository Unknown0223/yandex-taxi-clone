import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AppShell from './ui/AppShell'
import Home from './views/Home'
import Search from './views/Search'
import Services from './views/Services'
import News from './views/News'
import Profile from './views/Profile'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <Home /> },
      { path: '/search', element: <Search /> },
      { path: '/services', element: <Services /> },
      { path: '/news', element: <News /> },
      { path: '/profile', element: <Profile /> },
    ],
  },
])