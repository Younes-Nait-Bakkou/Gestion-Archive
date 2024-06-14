import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Login from './auth/Login';
import NotFoundPage from './errors/NotFoundPage';
import Register from './auth/Register.js';
import Dashboard from './pages/dashboard/Dashboard.js';
import AdminLayout from './layouts/admin/AdminLayout.js';
import Views from './pages/views/Views.js';
import ViewLayout from './components/layout/view/ViewLayout.js';
import ActionLayout from './components/layout/action/ActionLayout.js';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Navigate to='/login' />,
    errorElement:<NotFoundPage />
  },
  {
    index:true,
    path:'/login',
    element: <Login />,
  },
  {
    path:'/register',
    element: <Register />,
  },
  {
    element:<AdminLayout />,
    children:[
      {
        path:'/admin/dashboard',
        element:<Dashboard 
          title={'Dashboard'} 
          resourceName={'modules'}
        />
      },
      {
        path: '/admin/views',
        element: <Views title={'View'} resourceName={'modules'}/>,
      },
      {
        children:[
          {
            path: '/admin/views/modules',
            element: <ViewLayout resourceName={'Modules'}/>,
          },
          {
            path: '/admin/views/formateurs',
            element: <ViewLayout resourceName={'Formateurs'}/>,
          },
          {
            path: '/admin/views/groupes',
            element: <ViewLayout resourceName={'Groupes'}/>,
          },
          {
            path: '/admin/views/users',
            element: <ViewLayout resourceName={'Users'}/>,
          },
        ]
      },
      {
        path:'/admin/actions',
        element:<Dashboard />
      },
      {
        children:[
          {
            path: '/admin/actions/modules',
            element: <ActionLayout resourceName={'Modules'} />,
          },
          {
            path: '/admin/actions/formateurs',
            element: <ActionLayout resourceName={'Formateur'} />,
          },
          {
            path: '/admin/actions/groupes',
            element: <ActionLayout resourceName={'Groupes'} />,
          },
          {
            path: '/admin/actions/users',
            element: <ActionLayout resourceName={'Users'} />,
          },
        ]
      },
      {
        path:'/admin/statistics',
        element:<Dashboard />
      },
      {
        path:'/admin/sync',
        element:<Dashboard />
      },
      {
        path:'/admin/history',
        element:<Dashboard />
      },
      {
        path:'/admin/settings',
        element:<Dashboard />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

