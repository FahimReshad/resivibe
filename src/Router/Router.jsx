import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../MainLayout/MainLayout";
import UpdateProfile from "../Pages/UpdateProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ViewProperty from "../Pages/ViewProperty";
import PrivateRoute from "./PrivateRoute";
import ErrorPages from "../Pages/ErrorPages";
import About from "../Pages/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/estate.json')
            }, 
            {
                path: '/updateProfile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/viewProperty/:id',
                element: <PrivateRoute><ViewProperty></ViewProperty></PrivateRoute>,
                loader: () => fetch('/estate.json')
            }, 
            {
                path: '/about',
                element: <PrivateRoute><About></About></PrivateRoute>

            }
        ]
    }
]) 

export default router;