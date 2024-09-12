import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Activity.css"

interface ActivityProp {
    actName: string;
    imgPath: string;
    navigateTo: string;
}

const Activity: React.FC<ActivityProp> = ({ actName, imgPath, navigateTo }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(navigateTo)
    }
    
    return (
        <div className="activity-container" onClick={handleClick}>
            <img src={imgPath} alt="activity_image" className="act-img"/>
            <h1>{actName}</h1>
        </div>
    )
}

export default Activity