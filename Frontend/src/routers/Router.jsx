import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Home from './../pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/courses',
            element: <div>Courses</div>
        },
        {
            path: '/students',
            element: <div>Students</div>
        },
        {
            path: '/payments',
            element: <div>Payments</div>
        }
    ]
  },
]);

export default router;
