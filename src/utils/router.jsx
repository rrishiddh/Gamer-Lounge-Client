import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home";
import AllReviews from "../components/AllReviews";
import Register from "../components/Register";
import Login from "../components/Login";
import AuthLayout from "../components/AuthLayout";



const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element : <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/highest_rated_games')
            },
            {
                path: "/all_reviews",
                element : <AllReviews></AllReviews>,
            },
            {
                path: "auth",
                element: <AuthLayout></AuthLayout>,
                children : [
                  {
                    path: "/auth/login",
                    element: <Login></Login>,
                  },
                  {
                    path: "/auth/register",
                    element: <Register></Register>,
                  }                 
                ]
            },               
        ]
    }
])

export default router;