import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Home from "./../pages/Home";
import Signin from "./../components/Signin";
import Signup from "./../components/signup";
import ProtectedRoute from "./ProtectedRoute";

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
        element: <div>Courses</div>,
      },
      {
        path: "/students",
        element: <div>Students</div>,
      },
      {
        path: "/payments",
        element: <div>Payments</div>,
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
