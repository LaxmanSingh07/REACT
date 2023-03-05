import React from "react";
import ReactDOM from 'react-dom/client';

import HeadComponent from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";


const AppLayout = () => {
    return (
        <>
            <HeadComponent />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
