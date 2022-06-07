import React, {Component} from "react";
import classes from "./about.module.scss";

const About = () => {
    return (
        <div className={`${classes.main}`}>
            <section className={classes.about}>
                <h1>Great things coming soon.</h1>
            </section>
        </div>
    )
}

export default About