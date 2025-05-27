import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Home from "./../pages/Home";
import Signin from "./../components/Signin";
import Signup from "./../components/signup";
import ProtectedRoute from "./ProtectedRoute";
import Courses from './../pages/Courses';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/students",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <div>Dashboard</div>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
