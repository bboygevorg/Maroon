import React from "react";
import classes from "../catalogItem/catalogs.module.scss";

const RecentViewItem = ({name, title, img, price, weight}) => {
    return (
        <div className={classes.catalogList}>
            <a className={classes.productLink} href="#">
                <img className={classes.productImage} src={img} alt=""/>
                <div className={classes.productWrapper}>
                    <div className={classes.productText}>
                        <h3 className={classes.productTitle}>{name}</h3>
                        <span>{price}</span>
                    </div>
                    <div className={classes.productText}>
                        <div className={classes.productDescription}>{title}</div>
                        <div className={classes.productDescription}>{weight}</div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default RecentViewItem;