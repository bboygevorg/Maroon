import React, {Component} from "react";
import classes from './main.module.scss'
import {AboutContent} from "./sectionAbout/aboutContent/aboutContent";
import {AboutItem} from "./sectionAbout/aboutItem/aboutItem";
import {SliderList} from "../../components/sliderList/sliderList";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css'
import prevLogo from '../../assets/svg/sprite/arrow-left.svg'
import nextLogo from '../../assets/svg/sprite/main-arrow.svg'
import individual from '../../assets/img/care@1x.jpg'

const items = [
    <div className="item"  data-value="1">
            <SliderList />
    </div>,
    <div className="item" data-value="2">
        <SliderList />
    </div>,
    <div className="item" data-value="3">
        <SliderList />
    </div>,
    <div className={`item`} data-value="4">
        <SliderList />
    </div>,
    <div className="item" data-value="5">
        <SliderList />
    </div>,
    <div className="item" data-value="6">
        <SliderList />
    </div>,
    <div className="item" data-value="7">
        <SliderList />
    </div>,
    <div className="item" data-value="8">
        <SliderList />
    </div>,
    <div className="item" data-value="9">
        <SliderList />
    </div>,
    <div className="item" data-value="10">
        <SliderList />
    </div>,
    <div className="item" data-value="10">
        <SliderList />
    </div>,
    <div className="item" data-value="10">
        <SliderList />
    </div>,
]

const responsive = {
    0: { items: 1 },
    767: { items: 3 },
    1199: { items: 5 },
};

const MainContainer = () => {
    return (
        <div className={`${classes.main} ${classes.mainNoTopSpaced}`}>
            <section className={`${classes.mainBlock} ${classes.about}`}>
                <div className={classes.aboutContainer}>
                    <div className={classes.aboutContent}>
                        <AboutContent />
                    </div>
                    <div className={`${classes.aboutItem} ${classes.promoCard}`}>
                        <AboutItem/>
                    </div>
                    <div className={`${classes.aboutItem} ${classes.promoCard}`}>
                        <AboutItem/>
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
                    <div className={`${classes.swiperSlider}`}>
                        <AliceCarousel
                            disableDotsControls={true}
                            items={items}
                            responsive={responsive}
                        />
                    </div>
                    <div className={classes.sliderButtonContainer}>
                        <div className={`${classes.sliderButton} ${classes.sliderButtonPrev}`}>
                            <img src={prevLogo}  alt=""/>
                        </div>
                        <div className={`${classes.sliderButton} ${classes.sliderButtonNext}`}>
                            <img src={nextLogo} alt=""/>
                        </div>
                    </div>
                </div>
                <a className={`${classes.bestSellersLink} ${classes.bestSellersLinkMobile} ${classes.button}`} href="#" aria-label="Смотреть все">Смотреть все</a>
            </section>
            <section className={`${classes.mainBlock} ${classes.banner}`}>
                <div className={classes.bannerContent}>
                    <h2 className={classes.bannerTitle}>Встречайте весну вместе с нами</h2>
                    <p className={classes.bannerDescription}>Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой</p>
                    <a href="#" className={`${classes.bannerLink} ${classes.button}`} aria-label="Подробнее">Подробнее</a>
                </div>
            </section>
            <section className={`${classes.mainBlock} ${classes.individual}`}>
                <div className={classes.individualContainer}>
                    <div className={classes.individualContent}>
                        <h2 className={classes.individualTitle}>Индивидуальный уход</h2>
                        <p className={`${classes.individualText} ${classes.individualTextHiddenMobile}`}>Не всегда очевидно, какие элементы и минералы необходимы коже,
                            а многочисленные эксперименты с разными средствами только ухудшают ее качество.
                        </p>
                        <p className={classes.individualText}>Заполните анкету,
                            и мы подберем уход, подходящий именно вам, учитывая ваш образ жизни, место жительства и другие факторы.
                        </p>
                        <a href="#" className={`${classes.individualLink} ${classes.button}`} aria-label="Заполнить анкету">Заполнить анкету</a>
                    </div>
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
        </div>
    )
}

export default MainContainer;