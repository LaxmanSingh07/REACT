const Title = () => ( //export by name 
    <a href="/">
        <img className="logo"
            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-2048x2048.png"
            alt="logo" />

    </a>
);

//there are two ways of exporting 
const HeadComponent = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>

    );
};


// export default Title; // i can export  default only one thing 

export default HeadComponent;