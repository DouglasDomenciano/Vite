import Login from '~/pages/login';
import Home from '~/pages/home';

export default [
    {
        path: '/login',
        exact: true,
        element: <Login />,
    },
    {
        path: '/',
        exact: true,
        element: <Home />,
    },
];
