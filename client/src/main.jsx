import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeRoute from './routes/HomeRoute';
import LoginRoute from './routes/LoginRoute';
import RegisterRoute from './routes/RegisterRoute';
import ProfileRoute from './routes/ProfileRoute';
import CuratorsRoute from './routes/CuratorsRoute';
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <HomeRoute />,
      },
      {
        path: '/login',
        element: <LoginRoute />,
      },
      {
        path: '/register',
        element: <RegisterRoute />,
      },
      {
        path: '/profiles/:id',
        element: <ProfileRoute />,
      },
      {
        path: '/curators',
        element: <CuratorsRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
