import React, {Component} from "react";
import classes from './aboutItem.module.scss';
import {NavLink} from "react-router-dom";

const AboutItem = ({img, title, arrow}) => {
    return (
        <div className={classes.promoCardImages}>
            <NavLink className={`${classes.textDecoration} ${classes.promoHover}`} to="/catalog">
                <div>
                    <img src={img} className={classes.promoCardImage}/>
                </div>
                <div className={classes.promoCardText}>
                    <span>{title}</span>
                    <img src={arrow} className={classes.promoCardIcon} alt=""/>
                </div>
            </NavLink>
        </div>

    )
}

export {AboutItem}