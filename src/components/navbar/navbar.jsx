import React, {Component} from "react";
import classes from './navbar.module.scss'
import {NavLink} from "react-router-dom";
import facebook from '../../assets/svg/sprite/facebook-icon.svg'
import instagram from '../../assets/svg/sprite/instagram-icon.svg'
import twitter from '../../assets/svg/sprite/twitter-icon.svg'

const Navbar = ({className}) => {
    return (
        <nav className={`${classes.nav} ${className ? className : ''}`}>
            <div className={classes.item}>
                <NavLink className={classes.link} to="/catalog/catalog">Каталог</NavLink>
                <NavLink className={classes.link} to="/about">О нас</NavLink>
                <NavLink className={classes.link} to="/contacts">Контакты</NavLink>
            </div>

            <div className={`${classes.contacts}`}>
                <div className={classes.socialItem}>
                    <a href="#">
                        <img src={facebook} alt=""/>
                    </a>
                </div>
                <div className={classes.socialItem}>
                    <a href="#">
                        <img src={instagram} alt=""/>
                    </a>
                </div>
                <div className={classes.socialItem}>
                    <a href="#">
                        <img src={twitter} alt=""/>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

