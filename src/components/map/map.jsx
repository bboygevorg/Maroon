import React, {Component} from "react";
import classes from './map.module.scss';
import facebook from '../../assets/svg/sprite/facebook-icon.svg'
import instagram from '../../assets/svg/sprite/instagram-icon.svg'
import twitter from '../../assets/svg/sprite/twitter-icon.svg'

const Map = () => {
    return (
        <>
            <section className={`${classes.mainBlock} ${classes.contacts}`}>
                <div className={classes.contactsContainer}>
                    <div className={classes.contactsContent}>
                        <h2 className={classes.contactsTitle}>Контакты</h2>
                        <ul className={classes.contactsList}>
                            <li className={classes.contactsItem}>
                               <h3>Адрес</h3>
                                <p>Санкт-Петербург,</p>
                                <p>ул. Большая Конюшенная, 19</p>
                            </li>
                            <li className={classes.contactsItem}>
                                <h3>Телефон</h3>
                                <a className={classes.contactsLink} href="tel:+79238889060" aria-label="Телефон">+7 (923)
                                    888-90-60</a>
                            </li>
                            <li className={classes.contactsItem}>
                                <h3>E-mail</h3>
                                <a className={classes.contactsLink} href="mailto:info@maroon.ru" aria-label="E-mail">info@maroon.ru</a>
                            </li>
                        </ul>

                        <ul className={classes.contactsSocials}>
                            <li className={classes.socialItem}>
                                <a className={classes.socialLink} href="#" aria-label="Facebook">
                                    <img src={facebook} alt=""/>
                                </a>
                            </li>
                            <li className={classes.socialItem}>
                                <a className={classes.socialLink} href="#" aria-label="Instagram">
                                    <img src={instagram} alt=""/>
                                </a>
                            </li>
                            <li className={classes.socialItem}>
                                <a className={classes.socialLink} href="#" aria-label="Twitter">
                                    <img src={twitter} alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={`${classes.contactsMapWrapper} ${classes.map}`}>
                        <div></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export {Map}