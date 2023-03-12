import React, { lazy, Suspense } from "react";
import ReactDOM from 'react-dom/client';
import HeadComponent from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./component/error";
import Contact from "./component/contact";
import RestaurantMenu from "./component/Restaurantmenu";
import Profile from "./component/Profile";
import Shimmer from "./component/shimmer";
// import Instamart from "./component/instaMart";

//you have to import the Instamart in lazy load way 


//Upon on demaand loading 
//Upon render react will suspend loading 
//to handle this we have to use something known as Suspense
const Instamart =lazy(()=>import("./component/instamart"));//it is like a dynmaic import
// this is a promise
//this lazy comes from my react library

const AppLayout = () => {

    return (
        <>
            <HeadComponent />
            <Outlet />
            <Footer />
        </>
    );
};

const About=lazy(()=>import("./component/About"))

const appRouter = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    children: [
        {
            path: "/",
            element: <Body />
        },
        {
            path: "/about",
            element:<Suspense fallback={
                <h1>Loading</h1>
            }> <About /></Suspense>,
            children:[
                {
                    path:"profile", //localhost:1234/about/profile
                    element:<Profile/>
                }
            ]
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/restaurant/:id",
            element: <RestaurantMenu />
        },
        {
            Path:"/instamart",
            //it wil show the shinner until the instmart
            element:<Suspense fallback={Shimmer}>
                <Instamart/>
            </Suspense>
        }
    ]
},

])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
