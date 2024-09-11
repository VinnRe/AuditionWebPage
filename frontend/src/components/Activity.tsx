import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Activity.css"

interface ActivityProp {
    actName: string;
    navigateTo: string;
}

const Activity: React.FC<ActivityProp> = ({ actName, navigateTo }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(navigateTo)
    }
    
    return (
        <div className="activity-container" onClick={handleClick}>
            <img src="" alt="activity_image" />
            <h1>{actName}</h1>
        </div>
    )
}

export default Activity