import React from "react";
import defaultClasses from './defaultClasses.module.scss'

const SectionDetails = ({classes, title, description, button }) => {
    return (
        <div className={classes}>
            <h2 className={defaultClasses.bannerTitle}>{title}</h2>
            <p className={defaultClasses.bannerDescription}>{description}</p>
            <a href="#" className={`${defaultClasses.bannerLink} ${defaultClasses.button}`}>{button}</a>
        </div>
    )
}

export default SectionDetails