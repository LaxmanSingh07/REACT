import React, { Profiler } from "react";
import ReactDOM from 'react-dom/client';
import HeadComponent from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About"
import Error from "./component/error";
import Contact from "./component/contact";
import RestaurantMenu from "./component/Restaurantmenu";
import Profile from "./component/Profile";

const AppLayout = () => {

    return (
        <>
            <HeadComponent />
            <Outlet />
            <Footer />
        </>
    );
};

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
            element: <About />,
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
        }
    ]
},
{
    path: "/about",
    element: <About />
}

])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
