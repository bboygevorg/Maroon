import React from "react";
import classes from './catalogItem.module.scss'
import productImage from '../../assets/img/catalog/high@1x.webp'

const CatalogList = () => {
    return (
        <>
            <div className={classes.catalogList}>
                <a className={classes.productLink} href="#">
                    <img src={productImage} alt=""/>
                    <div className={classes.productWrapper}>
                        <div className={classes.productText}>
                            <div>1</div>
                            <div>2</div>
                        </div>
                        <div className={classes.productText}>
                            <div>1</div>
                            <div>2</div>
                        </div>
                    </div>
                </a>
            </div>
            <div className={classes.catalogList}>
                <a className={classes.productLink} href="#">
                    <img src={productImage} alt=""/>
                    <div>2</div>
                </a>
            </div>
            <div className={classes.catalogList}>
                <a className={classes.productLink} href="#">
                    <img src={productImage} alt=""/>
                    <div>3</div>
                </a>
            </div>
            <div className={classes.catalogList}>
                <a className={classes.productLink} href="#">
                    <img src={productImage} alt=""/>
                    <div>4</div>
                </a>
            </div>
            <div className={classes.catalogList}>
                <a className={classes.productLink} href="#">
                    <img src={productImage} alt=""/>
                    <div>5</div>
                </a>
            </div>
            <div className={classes.catalogList}>
                <a className={classes.productLink} href="#">
                    <img src={productImage} alt=""/>
                    <div>6</div>
                </a>
            </div>
            <div className={classes.catalogList}>
                <a className={classes.productLink} href="#">
                    <img src={productImage} alt=""/>
                    <div>7</div>
                </a>
            </div>
            <div className={classes.catalogList}>
                <a className={classes.productLink} href="#">
                    <img src={productImage} alt=""/>
                    <div>8</div>
                </a>
            </div>
            <div className={classes.catalogList}>
                <a className={classes.productLink} href="#">
                    <img src={productImage} alt=""/>
                    <div>9</div>
                </a>
            </div>
            <div className={classes.catalogList}>
                <a className={classes.productLink} href="#">
                    <img src={productImage} alt=""/>
                    <div>10</div>
                </a>
            </div>
            <div className={classes.catalogList}>
                <a className={classes.productLink} href="#">
                    <img src={productImage} alt=""/>
                    <div>11</div>
                </a></div>
            <div className={classes.catalogList}>
                <a className={classes.productLink} href="#">
                    <img src={productImage} alt=""/>
                    <div>12</div>
                </a>
            </div>
        </>
    )
}

export default CatalogList;