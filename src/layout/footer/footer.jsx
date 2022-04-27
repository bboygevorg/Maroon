import React, {Component} from "react";
import classes from './footer.module.scss'
import logo from "../../assets/svg/sprite/logo-icon.svg";
import {NavLink} from "react-router-dom";
import facebook from "../../assets/svg/sprite/facebook-icon.svg";
import instagram from "../../assets/svg/sprite/instagram-icon.svg";
import twitter from "../../assets/svg/sprite/twitter-icon.svg";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footerContent}>
                <div className={`${classes.footerContentInner} ${classes.wrapper}`}>
                    <a href="/" className={classes.logo}>
                        <img src={logo} alt="maroon"/>
                    </a>
                    <div className={classes.footerList}>
                        <NavLink className={classes.footerLink} to="/catalog">Каталог</NavLink>
                        <NavLink className={classes.footerLink} to="/about">О нас</NavLink>
                        <NavLink className={classes.footerLink} to="/shops">Магазины</NavLink>
                        <NavLink className={classes.footerLink} to="/contacts">Контакты</NavLink>
                    </div>
                    <div className={`${classes.footerSocialList}`}>
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
                </div>
            </div>
            <div className={classes.footerCopyright}>
                <div className={`${classes.footerCopyrightInner} ${classes.wrapper}` }>
                    <p className={classes.footerCopyrightLink}>Maroon Ⓒ 2020 Все права защищены</p>
                    <p><a href="">Политика конфиденциальности</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer