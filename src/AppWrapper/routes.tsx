import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Following from '../Components/following';
import Home from '../Pages/home';

export const routeConfig: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        handle: {
          label: 'Home',
          topMenu: true,
        },
        children: [
          {
            path: 'following',
            element: <Following />,
            handle: {
              label: 'Following',
              topMenu: true,
            },
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routeConfig);

export default router;
