import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefLayout from "../layouts/ChefLayout";
import Chef from "../pages/Chef/Chef/Chef";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import LoginLayout from "../layouts/LoginLayout";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "chef",
        element: <ChefLayout></ChefLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute>
                    <Chef></Chef>
                    </PrivateRoute>,
                loader: ({params}) => fetch(`https://chef-vibes-server-nusratjahangeek.vercel.app/chefs/${params.id}`)
            }
        ]
    }
  ]);

  export default router;