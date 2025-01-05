import App from '../../application/App';
import Login from '../pages/Login';

const PublicRoutes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export default PublicRoutes;
