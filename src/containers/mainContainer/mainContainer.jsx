import React, {Component} from "react";
import classes from './main.module.scss'
import {AboutContent} from "./sectionAbout/aboutContent/aboutContent";
import {AboutItem} from "./sectionAbout/aboutItem/aboutItem";

const MainContainer = () => {
    return (
        <div className={`${classes.main} ${classes.mainNoTopSpaced}`}>
            <section className={`${classes.mainBlock} ${classes.about}`}>
                <div className={classes.aboutContainer}>
                    <div className={classes.aboutContent}>
                        <AboutContent />
                    </div>
                    <div className={`${classes.aboutItem} ${classes.promoCard}`}>
                        <AboutItem/>
                    </div>
                    <div className={`${classes.aboutItem} ${classes.promoCard}`}>
                        <AboutItem/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainContainer;