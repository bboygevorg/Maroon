import React from "react";
import classes from "./followImage.module.scss";

const FollowImage = (props) => {
    return (
            <div>
                <img className={classes.followImage} src={props.img}/>
            </div>
    )
}

export default FollowImage;