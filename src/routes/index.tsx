import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Application from '../pages/Application';
import Layout from '../components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'application',
        element: <Application />
      }
    ]
  }
]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;