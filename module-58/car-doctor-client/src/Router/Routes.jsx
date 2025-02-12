import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import LogIn from "../Pages/LogIn/LogIn";
import ServiceCheckout from "../Pages/ServiceCheckout/ServiceCheckout";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Bookings from "../Pages/Bookings/Bookings";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signUp',
                element:<Register></Register>

            },
            {
                path:'/logIn',
                element:<LogIn></LogIn>
            },
            {
                path:'/serviceDetails/:id',
                loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`) ,
                element:<ServiceDetails></ServiceDetails>
            },
            {
                path:'/serviceCheckout/:id',
                loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`) ,
                element:<ServiceCheckout></ServiceCheckout>
            },
            {
                path:'/bookings',
                element:<Bookings></Bookings>
            }

            

        ]
    }
])

export default router