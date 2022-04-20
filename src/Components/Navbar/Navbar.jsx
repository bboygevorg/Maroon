import React, {Component} from "react";
import classes from '../Navbar/navbar.module.scss'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/catalog">Каталог</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/about">О нас</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/contacts">Контакты</NavLink>
            </div>
        </nav>
    )
}

export default Navbar

