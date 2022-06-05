import React, {Component} from "react";
import sliderImg from './../../assets/img/cream-high@1x.jpg'
import classes from './sliderList.module.scss'

const SliderList = () => {
    return (
        <div>
            <div className={classes.sliderPosition}>
                <img className={classes.sliderCartImage} src={sliderImg} alt="High - крем для лица"/>
                <div className={classes.sliderInformation}>
                    <h3 className={classes.sliderCartTitle}>High</h3>
                    <p className={classes.sliderCartDescription}>крем для лица</p>
                    <a className={classes.sliderCartLink} href="#" aria-label="Подробнее">Подробнее</a>
                </div>
            </div>
        </div>

    )
}

export {SliderList}