import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Resister from "../Resister/Resister";
import Secrete from "../Pages/Secrete/Secreet";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "secrete",
        element: (
          <PrivateRoute>
            <Secrete />
          </PrivateRoute>
        ),
      },
      {
        path: "resister",
        element: <Resister />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "mycart",
        element: <MyCart />,
      },
    ],
  },
]);
