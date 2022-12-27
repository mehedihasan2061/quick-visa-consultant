import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import DetailsReview from "../../pages/Review/DetailsReview";
import Home from "../../pages/Home/Home";

import Login from "../../pages/Login";

import NotFound from "../../pages/NotFound";
import Register from "../../pages/Register";
import ServicePage from "../../pages/Services/ServicePage";
import UserReview from "../../pages/UserReview/UserReview";
import Blogs from "../../pages/Blogs/Blogs";
import PrivateRoutes from "./PrivetRoutes";
import AddService from "../../pages/AddService/AddService";
import UpdateReview from "../../pages/Review/UpdateReview";


const routes = createBrowserRouter([
    {
    path:'/',
    element: <App/>,
    children:[

        {
            path:'*',
            element: <NotFound/>
        },{
            path:'/services',
            loader:()=> fetch(`https://service-review-server-woad.vercel.app/services`),
            element:<ServicePage/>
        },
        {
            path:'/update/:id',
            loader:({params})=> fetch(`https://service-review-server-woad.vercel.app/update/${params.id}`),
            element: <UpdateReview/>
        },
        
        {
            path:'/service/:id',
            loader:({params})=> fetch(`https://service-review-server-woad.vercel.app/service/${params.id}`),
            element:<PrivateRoutes><DetailsReview/></PrivateRoutes>
        },
        {
            path:'/add',
            element:<PrivateRoutes><AddService/></PrivateRoutes>
        },
        {

            path:'/blogs',
            loader:()=> fetch('https://service-review-server-woad.vercel.app/blogs'),
            element:<Blogs/>
        },

        
        {
            path:'/login',
            element:<Login/>
        },{
            path:'/reviews',
            element:<UserReview/>
        },{
            path:'/signup',
            element:<Register/>
        },{
            path:'/',
       
            element:<Home/>

        }
    ]
    }
])


export default routes