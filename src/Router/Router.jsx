import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../MainLayout/MainLayout";
import UpdateProfile from "../Pages/UpdateProfile";
import UserProfile from "../Pages/UserProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ViewProperty from "../Pages/ViewProperty";
import PrivateRoute from "./PrivateRoute";
import ErrorPages from "../Pages/ErrorPages";

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
                path: '/userProfile',
                element: <UserProfile></UserProfile>
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
            }
        ]
    }
]) 

export default router;