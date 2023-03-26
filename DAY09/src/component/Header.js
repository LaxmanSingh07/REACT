import { useEffect, useState } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnlline";
const loggedInUser = () => {

    return true;
}
const Title = () => (
    <a href="/">
        <img className="logo"
            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-2048x2048.png"
            alt="logo" />

    </a>
);

const HeadComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline=useOnline();
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>

                  <li>  <Link to="/about">About us</Link></li>

                    <li> <Link to="/Contact">  Contact Us </Link></li>
                    <li> <Link to="/instamart"> Instamart </Link></li>
                    <li>cart</li>
                </ul>
            </div>
            <h1>{isOnline?'✅ ':'👾👾'}</h1>
            {
                (isLoggedIn) ? <button onClick={() => setIsLoggedIn
                    (false)}>Login</button> : <button onClick={() => setIsLoggedIn(true)}>Logout</button>
            }


        </div>

    );
};



export default HeadComponent;