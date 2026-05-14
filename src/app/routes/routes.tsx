import { createBrowserRouter } from 'react-router';
import { HomePage } from '../../pages/home';
import { Layout } from '../layout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);
