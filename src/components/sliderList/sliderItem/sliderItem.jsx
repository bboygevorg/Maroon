import React, {Component} from "react";
import classes from './sliderItem.module.scss'

const SliderItem = ({name, title, img}) => {
    return (
        <div>
            <div className={classes.sliderPosition}>
                <img className={classes.sliderCartImage} src={img} alt="High - крем для лица"/>
                <div className={classes.sliderInformation}>
                    <h3 className={classes.sliderCartTitle}>{name}</h3>
                    <p className={classes.sliderCartDescription}>{title}</p>
                    <a className={classes.sliderCartLink} href="#" aria-label="Подробнее">Подробнее</a>
                </div>
            </div>
        </div>

    )
}

export {SliderItem}