import React, {Component} from "react";
import classes from './main.module.scss'
import {AboutContent} from "./sectionAbout/aboutContent/aboutContent";
import 'react-alice-carousel/lib/alice-carousel.css'
import individual from '../../assets/img/care@1x.jpg'
import {Follow} from "../../components/follow/follow";
import {Map} from "../../components/map/map";
import SlidersList from "../../components/sliderList/components/slidersList";
import SectionDetails from "../../components/section/section";
import {aboutItem } from "../static/static";
import {AboutItem} from "./sectionAbout/aboutItem/aboutItem";


const MainContainer = () => {
    return (
        <div className={`${classes.main} ${classes.mainNoTopSpaced}`}>
            <section className={`${classes.mainBlock} ${classes.about} ${classes.boxShadow}`}>
                <div className={classes.aboutContainer}>
                    <div className={classes.aboutContent}>
                        <AboutContent  />
                    </div>
                    <div className={`${classes.aboutItem} ${classes.promoCard}`}>
                        {aboutItem .map((item, index) => {
                            return  <AboutItem  {...item} key={index} />
                        })}
                    </div>
                </div>
            </section>
            <section className={`${classes.mainBlock} ${classes.bestSellers}`}>
                <div className={classes.bestSellersText}>
                    <h2 className={classes.bestSellersTitle}>Бестселлеры</h2>
                    <p className={classes.bestSellersDescription}>Легендарные продукты, завоевавшие любовь наших клиентов</p>
                    <a className={`${classes.bestSellersLink} ${classes.button}`} href="#" aria-label="Смотреть все">Смотреть все</a>
                </div>
                <div className={`${classes.bestSellersSlider}`}>
                    <SlidersList/>
                    <div className={classes.sliderButtonContainer} />
                </div>
                <a className={`${classes.bestSellersLink} ${classes.bestSellersLinkMobile} ${classes.button}`} href="#" aria-label="Смотреть все">Смотреть все</a>
            </section>
            <section className={`${classes.mainBlock} ${classes.banner}`}>
                <SectionDetails classes={classes.bannerContent}
                                title={
                                    <div className={classes.textMargin}>
                                        <p style={{margin:0}}>Встречайте весну</p>
                                        <p style={{margin:0}}>вместе с нами</p>
                                    </div>
                                }
                                description={'Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой'}
                                button={"Подробнее"}
                />
            </section>
            <section className={`${classes.mainBlock} ${classes.individual}`}>
                <div className={classes.individualContainer}>
                    <SectionDetails  classes={classes.individualContent}
                                     title={"Индивидуальный уход"}
                                     description={
                                         <div>
                                             <p>Не всегда очевидно, какие элементы и минералы необходимы коже, а многочисленные эксперименты с разными средствами только ухудшают ее качество.</p>
                                             <p>Заполните анкету, и мы подберем уход, подходящий именно вам, учитывая ваш образ жизни, место жительства и другие факторы.</p>
                                         </div>
                                     }
                                     button={"Заполните анкету"}
                    />
                    <div className={classes.individualImage}>
                        <img className={classes.individualPicture} src={individual} alt=""/>
                    </div>
                </div>
            </section>
            <section className={`${classes.mainBlock} ${classes.history}`}>
                <div className={classes.historyContainer}>
                    <p className={classes.historyTitle}>
                        “Мы стремимся сделать уход за кожей доступным и приятным ритуалом для всех,
                        кто хочет заботиться о себе и своем теле”
                    </p>
                    <a className={`${classes.historyLink} ${classes.button}`} href="#" aria-label="Наша История">Наша История</a>
                </div>
            </section>
            <Follow />
            <Map />
        </div>
    )
}

export default MainContainer;