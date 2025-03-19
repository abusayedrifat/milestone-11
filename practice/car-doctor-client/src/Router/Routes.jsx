import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import LogIn from "../Pages/LogIn/LogIn";
import ServiceCheckout from "../Pages/ServiceCheckout/ServiceCheckout";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRouter from "./PrivateRouter";

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
                loader: ({params})=>fetch(`https://car-doctor-server-ten-neon.vercel.app/services/${params.id}`) ,
                element: <PrivateRouter><ServiceDetails></ServiceDetails></PrivateRouter> 
            },
            {
                path:'/serviceCheckout/:id',
                loader: ({params})=>fetch(`https://car-doctor-server-ten-neon.vercel.app/services/${params.id}`) ,
                element: <ServiceCheckout></ServiceCheckout>
            },
            {
                path:'/bookings',
                element: <PrivateRouter> <Bookings></Bookings></PrivateRouter>
            }

            

        ]
    }
])

export default router