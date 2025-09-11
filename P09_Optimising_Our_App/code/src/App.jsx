import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

// lazy loading for separate chunks and application optimization
const About = lazy(() => import('./components/About'));
const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([{
    path: '/',
    element: <AppLayout />,
    children: [{
        path: '/',
        element: <Body />
    },
    {
        path: '/about',
        element: (
            <Suspense fallback={<h2>Loading...</h2>}>
                <About />
            </Suspense>
        )
    }, {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/grocery',
        element: (
            <Suspense fallback={<h2>Loading...</h2>}>
                <Grocery />
            </Suspense>
        )
    },
    {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
    }],
    errorElement: <Error />
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
