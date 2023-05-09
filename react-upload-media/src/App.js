import './App.css';
import React, { useState } from 'react';
import { GettingStarted } from './pages/GettingStarted';
import { Installation } from './pages/Installation';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { Usage } from './pages/Usage';
import { Explore } from './pages/Explore';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Overview',
        index: true,
        element: <GettingStarted />,
      },
      {
        path: '/Installation',
        element: <Installation />,
      },
      {
        path: '/Usage',
        element: <Usage />,
      },
      {
        path: '/Explore',
        element: <Explore />,
      },
    ]
  }
])


function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
