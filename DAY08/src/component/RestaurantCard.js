import { IMG_CDN_URL } from "../constants";

const RestrauntCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {

    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <h6>{cuisines}</h6>
            <h4>{lastMileTravelString}minutes</h4>
        </div>
    )
}

export default RestrauntCard