import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        error: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            }
        ],
    },
]);

ReactDom.createRoot(document.getElementById('root').render(
    <RouterProvider router = { router } />
));