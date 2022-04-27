import React, {Component} from "react";
import classes from './aboutContent.module.scss'

const AboutContent = () => {
    return (
        <>
            <h1 className={classes.aboutTitle}>Maroon</h1>
            <p className={classes.aboutDescription}>
                Натуральная косметика
                <br/>
                для бережнего ухода за кожей
            </p>
            <a href="#" className={`${classes.aboutButton} ${classes.button}`}>Подробнее</a>
        </>
    )
}

export {AboutContent}