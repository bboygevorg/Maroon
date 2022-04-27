import React, {Component} from "react";
import classes from './aboutItem.module.scss';
import {NavLink} from "react-router-dom";
import mainArrow from '../../../../assets/svg/sprite/main-arrow.svg'
import mainJpg from '../../../../assets/img/main1@1x.jpg'

const AboutItem = () => {
    return (
        <div>
            <NavLink className={`${classes.textDecoration} ${classes.promoHover}`} to="/catalog">
                <picture>
                    <img src={mainJpg} className={classes.promoCardImage}/>
                </picture>
                <div className={classes.promoCardText}>
                    <span>Уход для лица</span>
                    <img src={mainArrow} className={classes.promoCardIcon} alt=""/>
                </div>
            </NavLink>
        </div>
    )
}

export {AboutItem}