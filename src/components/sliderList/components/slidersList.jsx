import React from "react";
import {SliderItem} from "../sliderItem/sliderItem";
import {slider} from "../../../containers/static/static";
import classes from "../components/sliderList.module.scss"
import prevLogo from "../../../assets/svg/sprite/arrow-left.svg";
import nextLogo from "../../../assets/svg/sprite/main-arrow.svg";
import AliceCarousel from "react-alice-carousel";

const responsive = {
    0: { items: 1 },
    767: { items: 3 },
    1199: { items: 6 },
};

const getSlider = () => {
    return slider.map((item, index) => {
        return <div className="item"  key={index} data-value={index}><SliderItem {...item} key={index} /></div>
    });
}
const SlidersList = () => {
    return (
        <>
            <AliceCarousel
                disableDotsControls={true}
                items={getSlider()}
                responsive={responsive}
                controlsStrategy="responsive"
                renderPrevButton={() => {
                    return (
                        <div className={`${classes.sliderButton} ${classes.sliderButtonPrev}`}>
                            <img src={prevLogo}  alt=""/>
                        </div>
                    )
                }}
                renderNextButton={() => {
                    return (
                        <div className={`${classes.sliderButton} ${classes.sliderButtonNext}`}>
                            <img src={nextLogo}  alt=""/>
                        </div>
                    )
                }}
            />
        </>
    )
}

export default SlidersList;