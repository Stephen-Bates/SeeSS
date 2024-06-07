import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeRoute from './routes/HomeRoute';
import LoginRoute from './routes/LoginRoute';
import RegisterRoute from './routes/RegisterRoute';
import ProfileRoute from './routes/ProfileRoute';
import CuratorsRoute from './routes/CuratorsRoute';
import CreateRoute from './routes/CreateRoute';
import StyleRoute from './routes/StyleRoute';
import App from './App.jsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';

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
        path: '/profile',
        element: <ProfileRoute />,
      },
      {
        path: '/curators',
        element: <CuratorsRoute />,
      },
      {
        path: '/create',
        element: <CreateRoute />,
      },
      {
        path: '/styles/:styleId',
        element: <StyleRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);
