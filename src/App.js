import React from 'react';
import Header from './pages/Header';
import Restaurants from './pages/Restaurants';
import Login from './pages/Login';
import Error from './components/Error';
import { Outlet } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layout component with common UI (like Header)
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      {/* <Restaurants /> */}
      <Outlet/>
    </div>
  );
};

// Define routes
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children:[
      {
    path: '/',
    element: <Restaurants />,

      },
      {
    path: '/login',
    element: <Login />,
      }
    ],
    errorElement:<Error/>,

  },
 
]);

// This is now your root component
const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
