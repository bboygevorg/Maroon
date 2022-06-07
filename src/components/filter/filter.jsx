import React, {useState} from "react";
import classes from "./filter.module.scss";
import MobileFilterAccordion from "./mobileFilterAccordion/mobileFilterAccordion";

const Filter = ({className}) => {

    return (
        <div className={`${classes.wrapper} ${className ? className : ''}`}>
            <div className={`${classes.filterPosition}`} action="">
                <div className={classes.filterBlock}>
                    <div className={classes.filterBlockHead}>
                        <div className={classes.filterSubtitle}>Уход для лица</div>
                    </div>
                    <form action="#" className={classes.filterItem}>
                        <label>
                            <input type="checkbox" name="face1" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Крема</span>
                        </label>
                        <label>
                            <input type="checkbox" name="face2" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Сыворотки</span>
                        </label>
                        <label>
                            <input type="checkbox" name="face3" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Маски</span>
                        </label>
                        <label>
                            <input type="checkbox" name="face4" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Пенки</span>
                        </label>
                        <label>
                            <input type="checkbox" name="face5" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Тоники</span>
                        </label>
                        <label>
                            <input type="checkbox" name="face6" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Пудры</span>
                        </label>
                    </form>
                </div>
                <div className={classes.filterBlock}>
                    <div className={classes.filterBlockHead}>
                        <div className={classes.filterSubtitle}>Уход для тела</div>
                    </div>
                    <form action="#" className={classes.filterItem}>
                        <label>
                            <input type="checkbox" name="body1" className={classes.checkBox} />
                            <spawn className={classes.fakeBox}></spawn>
                            <span className={classes.filterCheckBoxLabel}>Крема</span>
                        </label>
                        <label>
                            <input type="checkbox" name="body2" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Масла</span>
                        </label>
                        <label>
                            <input type="checkbox" name="body3" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Скрабы</span>
                        </label>
                        <label>
                            <input type="checkbox" name="body4" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Мыло</span>
                        </label>
                        <label>
                            <input type="checkbox" name="body5" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Бомбочки для ванны</span>
                        </label>
                        <label>
                            <input type="checkbox" name="body6" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Соль для ванны</span>
                        </label>
                    </form>
                </div>
                <div className={classes.filterBlock}>
                    <div className={classes.filterBlockHead}>
                        <div className={classes.filterSubtitle}>Тип кожы</div>
                    </div>
                    <form action="#" className={classes.filterItem}>
                        <label>
                            <input type="checkbox" name="leather1" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Нормальная</span>
                        </label>
                        <label>
                            <input type="checkbox" name="leather2" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Сухая</span>
                        </label>
                        <label>
                            <input type="checkbox" name="leather3" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Жирная</span>
                        </label>
                        <label>
                            <input type="checkbox" name="leather4" className={classes.checkBox} />
                            <span className={classes.fakeBox}></span>
                            <span className={classes.filterCheckBoxLabel}>Комбинированная</span>
                        </label>
                    </form>
                </div>
            </div>
            <MobileFilterAccordion />
            <div className={classes.filterButtonPosition}>
                <div className={classes.filterButtons}>
                    <button className={classes.filterButton}>Применить</button>
                    <button className={`${classes.filterButton} ${classes.filterButtonLeft}`}>Сбросить</button>
                </div>
            </div>
        </div>
    )
}

export default Filter;