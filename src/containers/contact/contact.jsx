import React, {Component} from "react";
import classes from './contact.module.scss'
import {Map} from "../../components/map/map";

const Contact = () => {
    return (
        <div className={`${classes.main} ${classes.contactMain}`}>
            <section className={classes.contacts}>
                <Map />
            </section>
        </div>
    )
}

export default Contact