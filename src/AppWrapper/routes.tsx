import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Following from '../Components/following';
import Home from '../Pages/home';
import { Home as HomeIcon, Subscriptions } from '@mui/icons-material';
import Subscription from '../Pages/subscription';

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
          sideMenu: true,
          icon: <HomeIcon />,
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
      {
        path: 'subscription',
        element: <Subscription />,
        handle: {
          label: 'Subscription',
          sideMenu: true,
          icon: <Subscriptions />,
        },
      },
    ],
  },
];

const router = createBrowserRouter(routeConfig);

export default router;
