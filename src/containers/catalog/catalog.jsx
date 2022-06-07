import React, {Component, useState} from "react";
import classes from './catalog.module.scss';
import Filter from "../../components/filter/filter";
import Catalogs from "../../components/catalog/catalogs";
import prevLogo from "../../assets/svg/sprite/arrow-left.svg";
import nextLogo from "../../assets/svg/sprite/main-arrow.svg";
import RecentViews from "../../components/recentViews/catalogs";
import {Follow} from "../../components/follow/follow";
import {Map} from "../../components/map/map";


const Catalog = () => {
    const [isActiveFilter, setIsActiveFilter] = useState(false)

    return (
        <div className={`${classes.main} ${classes.catalogMain}`}>
            <section className={classes.catalog}>
                <div>
                    <div className={classes.catalogTopHead}>
                        <h1 className={classes.catalogTitle}>Каталог</h1>
                        <button className={classes.catalogHeadButtonOpen} onClick={() => {setIsActiveFilter(!isActiveFilter)}}>Фильтр</button>
                    </div>
                    <div className={classes.catalogFilter}>
                        <Filter className={isActiveFilter ? classes.isActiveFilter : ''}/>
                    </div>
                </div>
                <div className={classes.catalogWrapper}>
                    <div className={classes.catalogList}>
                        <Catalogs />
                    </div>
                    <div className={classes.catalogPosition}>
                        <div className={classes.catalogNumberPosition}>
                            <p>1</p>
                            <p></p>
                            <p>8</p>
                        </div>
                        <div className={classes.catalogArrowPosition}>
                            <div className={`${classes.sliderButton} ${classes.sliderButtonPrev}`}>
                                <img src={prevLogo}  alt=""/>
                            </div>
                            <div className={`${classes.sliderButton} ${classes.sliderButtonNext}`}>
                                <img src={nextLogo}  alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={classes.historyCatalog}>
                <div className={classes.historyTitle}>
                    <h1>Вы недавно смотрели</h1>
                </div>
                <div className={classes.historyCatalogView}>
                    <RecentViews />
                </div>
                <div className={classes.historyPosition}>
                    <div className={classes.historyNumberPosition}>
                        <p>1</p>
                        <p></p>
                        <p>3</p>
                    </div>
                    <div className={classes.historyArrowPosition}>
                        <div className={`${classes.sliderButton} ${classes.sliderButtonPrev}`}>
                            <img src={prevLogo}  alt=""/>
                        </div>
                        <div className={`${classes.sliderButton} ${classes.sliderButtonNext}`}>
                            <img src={nextLogo}  alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <Follow />
            <Map />
        </div>
    )
}

export default Catalog