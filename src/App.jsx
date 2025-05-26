import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Expenses } from './pages';
import { DashboardLayout } from './layouts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    errorElement: <p>Error loading page</p>,
    children: [
      {
        index: true,
        element: <Expenses />,
      },
      {
        path: 'dashboard',
        element: <div>Dashboard Page</div>,
      },
      {
        path: 'expenses',
        element: <Expenses />,
      },
      {
        path: 'wallet',
        element: <div>Wallet Page</div>,
      },
      {
        path: 'summary',
        element: <div>Summary Page</div>,
      },
      {
        path: 'accounts',
        element: <div>Accounts Page</div>,
      },
      {
        path: 'settings',
        element: <div>Settings Page</div>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
